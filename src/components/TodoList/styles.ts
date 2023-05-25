import styled from "styled-components";
export const TodoListContainer = styled.div`
	padding: 5px 0;
	margin-bottom: 15px;
	height: 400px;
	overflow-y: auto;
	overflow-x: hidden;
	::-webkit-scrollbar {
		width: 10px;
	}
	::-webkit-scrollbar-track {
		background-color: #262525;
	}
	::-webkit-scrollbar-thumb {
		background: linear-gradient(180deg, #2c253e 0%, #4b2323 100%);
		border-radius: 10px;
	}
`;
export const EmptyList = styled.h2`
	color: #686868;
	font-size: 25px;
	text-align: center;
	padding: 40px;
`;
