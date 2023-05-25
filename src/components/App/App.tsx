import { FC } from "react";
import TodoHeader from "../TodoHeader/TodoHeader";
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";
import { Container } from "../../styles";

const App: FC = (): JSX.Element => {
	return (
		<Container>
			<TodoHeader />
			<TodoList />
			<TodoInput />
		</Container>
	);
};

export default App;
