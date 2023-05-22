import { CSSTransition, TransitionGroup } from "react-transition-group";
import { FC } from "react";
import { useAppSelector } from "../../hooks/redux";
import TodoListItem from "../TodoListItem/TodoListItem";

import { TodoListContainer, EmptyList } from "./styles";

const TodoList: FC = ():JSX.Element=> {
	const todos = useAppSelector(state=> state.reducer.todos);
	return (
		<TodoListContainer>
			{todos.length !== 0 ? (
				<TransitionGroup>
					{todos.map((todo) => (
						<CSSTransition key={todo.id} timeout={500} classNames="item">
							<TodoListItem todo={todo}></TodoListItem>
						</CSSTransition>
					))}
				</TransitionGroup>
			) : (
				<EmptyList>No tasks</EmptyList>
			)}
		</TodoListContainer>
	);
};

export default TodoList;
