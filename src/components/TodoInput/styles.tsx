import styled from "styled-components";

export const InputContainer = styled.div`
	margin: 20px auto;
	width: 100%;
	display: flex;
	justify-content: center;
`;

export const Input = styled.input`
	min-width: 400px;
	padding: 10px;
	border-radius: 40px;
	font-size: 20px;
	background-color: rgb(238, 236, 236);
	&:focus {
		outline: 0;
	}
`;

export const InputLabel = styled.label``;
