import React, { FC, useRef, useState, useEffect } from "react";
import useDebounce from "../../hooks/useDebounce";
import {
	ItemsContainer,
	Item,
	Tool,
	Tools,
	Text,
	CheckBoxContainer,
	CheckBox,
	CheckMark,
	TextContainer,
} from "./styles";
import { IoCloseSharp } from "react-icons/io5";
import { BiPencil } from "react-icons/bi";
import { useAppDispatch } from "../../hooks/redux";
import { todoDeleted, todoUpdated } from "../../Store/reducers/TodoSlice";
import { ITodo } from "../../models/ITodo";

interface TodoListItemProps {
	todo: ITodo;
}
const TodoListItem: FC<TodoListItemProps> = ({ todo }): JSX.Element => {
	const { id, task, isCompleted } = todo;

	const [isReadonly, setIsReadonly] = useState<boolean>(true);
	const [value, setValue] = useState<string>(task);

	const debouncedValue: string = useDebounce<string>(value, 500);

	const updateTodo = () => {
		const updatedTask = {
			...todo,
			task: debouncedValue,
		};
		dispatch(todoUpdated(updatedTask));
	};

	useEffect(updateTodo, [debouncedValue]);
	const dispatch = useAppDispatch();

	const texRef = useRef<HTMLInputElement>(null);

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const focusHandler = () => {
		if (texRef.current) {
			setIsReadonly(false);
			texRef.current.focus();
		}
	};
	const completeHandler = () => {
		const complete = {
			...todo,
			isCompleted: !isCompleted,
		};
		dispatch(todoUpdated(complete));
	};

	return (
		<ItemsContainer>
			<Item>
				<TextContainer>
					<CheckBoxContainer>
						<CheckBox
							checked={isCompleted}
							onChange={completeHandler}
							type="checkbox"
						/>
						<CheckMark />
					</CheckBoxContainer>
					<Text
						ref={texRef}
						readOnly={isReadonly}
						value={value}
						onChange={changeHandler}
						isCompleted={isCompleted}
						onBlur={() => setIsReadonly(true)}
					/>
				</TextContainer>
				<Tools>
					<Tool onClick={focusHandler}>
						<BiPencil size="40px" color="#8361d9" />
					</Tool>
					<Tool onClick={() => dispatch(todoDeleted(id))}>
						<IoCloseSharp color="#da3a3a" size="40px" />
					</Tool>
				</Tools>
			</Item>
		</ItemsContainer>
	);
};

export default TodoListItem;
