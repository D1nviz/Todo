import React, { FC } from "react";
import { ItemsContainer, Item, Tool, Tools, Text } from "./styles";
import { HiOutlineTrash } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { BiPencil } from "react-icons/bi";
interface TodoListItemsProps{
	todos: string
}
const TodoListItem: FC<TodoListItemsProps> = ({todos}) => {
	return (
		<ItemsContainer>
			<Item>
				<Text>{todos}</Text>
				<Tools>
					<Tool>
						<BiPencil size="40px" color="#6361D9" />
					</Tool>
					<Tool>
						<IoCloseSharp color="red" size="40px" />
					</Tool>
				</Tools>
			</Item>
		</ItemsContainer>
	);
};

export default TodoListItem;
