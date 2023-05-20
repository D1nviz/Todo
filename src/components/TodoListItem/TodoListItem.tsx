import React, { FC, useCallback } from "react";
import { ItemsContainer, Item, Tool, Tools, Text } from "./styles";
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

	const completeHandler = (todo:ITodo) => {
		const complete = {
			...todo, 
			isCompleted: !isCompleted
		}
		dispatch(todoCompleted(complete))
	}

	return (
		<ItemsContainer>
			<Item>
				<Text 
					onClick={() => completeHandler(todo)  }
					isCompleted={isCompleted}
				>{task}</Text>
				<Tools>
					<Tool>
						<BiPencil size="40px" color="#6361D9" />
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
