import styled from "styled-components";

export const ItemsContainer = styled.div`
	margin: 0 auto;
	width: 390px;
	background-color: #272626;
	padding: 0 15px;
	border-radius: 40px;
`;
export const Item = styled.div`
	margin-top: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const Text = styled.p`
font-size: 18px;
`;
export const Tools = styled.div`
	width: 80px;
	display: flex;
	justify-content: space-between;
`;
export const Tool = styled.button`
	width: 30px;
	height: 40px;
	display: flex;
	border: 0px solid transparent;
	background-color: inherit;
	border-radius: 1.25em;
	transition: all .2s linear;
	cursor: pointer;
	&:hover {
		transform: scale(1.1);
	}
`;
