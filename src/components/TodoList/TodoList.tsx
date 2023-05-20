import { FC } from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import { useAppSelector } from "../../hooks/redux";

const TodoList: FC = () => {
	const todos = useAppSelector((state) => state.reducer.todos);
	return (
		<div>
			{todos.map((todo) => (
				<TodoListItem key={todo.id} todo={todo}></TodoListItem>
			))}
		</div>
	);
};

export default TodoList;
