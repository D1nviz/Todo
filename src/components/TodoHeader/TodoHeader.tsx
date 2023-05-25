import { FC } from "react";
import { Title, TitleContainer } from "./styles";
const TodoHeader: FC = (): JSX.Element => {
	return (
		<TitleContainer>
			<Title>Todo app</Title>
		</TitleContainer>
	);
};

export default TodoHeader;
