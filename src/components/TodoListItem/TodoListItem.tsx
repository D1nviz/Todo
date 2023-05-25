import React, { FC, useRef, useState, useEffect } from "react";
import useDebounce from "../../hooks/useDebounce";
import { useAppDispatch } from "../../hooks/redux";
import { todoDeleted, todoUpdated } from "../../Store/reducers/TodoSlice";
import { ITodo } from "../../models/ITodo";
import {
	ItemsContainer,
	Item,
	Tool,
	Tools,
	TextInput,
	CheckBoxContainer,
	CheckBox,
	CheckMark,
	TextContainer,
} from "./styles";
import { IoCloseSharp } from "react-icons/io5";
import { BiPencil } from "react-icons/bi";
import { useHttp } from "../../hooks/http.hook";

interface TodoListItemProps {
	todo: ITodo;
}
const TodoListItem: FC<TodoListItemProps> = ({ todo }): JSX.Element => {
	const { id, task, isCompleted } = todo;

	const { request } = useHttp();
	const dispatch = useAppDispatch();

	const [isReadonly, setIsReadonly] = useState<boolean>(true);
	const [isTaskCompleted, setIsTaskCompleted] = useState<boolean>(isCompleted);
	const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
	const [taskValue, setTaskValue] = useState<string>(task);

	const textInputRef = useRef<HTMLInputElement>(null);

	const debouncedValue: string = useDebounce<string>(taskValue, 500);

	useEffect(() => {
		const updatedTask = {
			...todo,
			task: debouncedValue,
			isCompleted: isTaskCompleted,
		};
		request(
			`http://localhost:3001/todos/${id}`,
			"PUT",
			JSON.stringify(updatedTask)
		)
			.then(() => dispatch(todoUpdated(updatedTask)))
			.catch((e) => console.log(e));
	}, [debouncedValue, isTaskCompleted]);

	const onDelete = () => {
		setIsButtonDisabled(true);
		request(`http://localhost:3001/todos/${id}`, "DELETE")
			.then(() => dispatch(todoDeleted(id)))
			.catch((e) => console.log(e));
	};

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTaskValue(e.target.value);
	};

	const onFocus = () => {
		if (textInputRef.current) {
			setIsReadonly(false);
			textInputRef.current.focus();
		}
	};

	const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Escape" || e.key === "Enter") {
			setIsReadonly(true);
		}
	};

	return (
		<ItemsContainer>
			<Item>
				<TextContainer>
					<CheckBoxContainer>
						<CheckBox
							checked={isTaskCompleted}
							onChange={() => setIsTaskCompleted(!isTaskCompleted)}
							type="checkbox"
						/>
						<CheckMark />
					</CheckBoxContainer>
					<TextInput
						ref={textInputRef}
						readOnly={isReadonly}
						onKeyDown={onKeyDown}
						value={taskValue}
						onChange={onChange}
						isCompleted={isCompleted}
						onBlur={() => setIsReadonly(true)}
					/>
				</TextContainer>
				<Tools>
					<Tool disabled={isButtonDisabled} onClick={onFocus}>
						<BiPencil size="40px" color="#8361d9" />
					</Tool>
					<Tool disabled={isButtonDisabled} onClick={onDelete}>
						<IoCloseSharp color="#da3a3a" size="40px" />
					</Tool>
				</Tools>
			</Item>
		</ItemsContainer>
	);
};

export default TodoListItem;
