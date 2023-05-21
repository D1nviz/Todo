import React, { FC } from "react";
import { ItemsContainer, Item, Tool, Tools, Text, CheckBoxContainer, CheckBox} from "./styles";
import { IoCloseSharp } from "react-icons/io5";
import { BiPencil } from "react-icons/bi";
import { useAppDispatch } from "../../hooks/redux";
import { todoDeleted, todoCompleted } from "../../Store/reducers/TodoSlice";
import { ITodo } from "../../models/ITodo";

interface TodoListItemProps {
	todo: ITodo;
}
const TodoListItem: FC<TodoListItemProps> = ({ todo }) => {
	const dispatch = useAppDispatch();
	const { id, task, isCompleted } = todo;

	const completeHandler = (e: React.MouseEvent<HTMLParagraphElement>) => {
		const complete = {
			...todo,
			isCompleted: !isCompleted,
		};
		dispatch(todoCompleted(complete));
	};

	return (
		<ItemsContainer>
			<Item>
				<CheckBoxContainer>
					<CheckBox/>
				</CheckBoxContainer>
				<Text onClick={completeHandler} isCompleted={isCompleted}>
					{task}
				</Text>
				<Tools>
					<Tool>
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
