import { CSSTransition, TransitionGroup } from "react-transition-group";
import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import TodoListItem from "../TodoListItem/TodoListItem";
import { TodoListContainer, EmptyList } from "./styles";
import Spinner from "../Spinner/Spinner";
import { fetchTodos } from "../../Store/reducers/ActionCreators";

const TodoList: FC = (): JSX.Element => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchTodos());
	}, []);
	
	const { todos, isLoading, error } = useAppSelector((state) => state.reducer);

	return (
		<TodoListContainer>
			{isLoading ? (
				<Spinner />
			) : error ? (
				<EmptyList>{error}</EmptyList>
			) : todos.length === 0 && !isLoading && !error ? (
				<EmptyList>No todos found.</EmptyList>
			) : (
				<TransitionGroup>
					{todos.map((todo) => (
						<CSSTransition key={todo.id} timeout={500} classNames="item">
							<TodoListItem todo={todo} />
						</CSSTransition>
					))}
				</TransitionGroup>
			)}
		</TodoListContainer>
	);
};

export default TodoList;
