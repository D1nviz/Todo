import styled from "styled-components";

export const ItemsContainer = styled.div`
	margin: 0 auto;
	width: 390px;
`;
export const Item = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const Text = styled.p``;
export const Tools = styled.div`
	width: 110px;
	display: flex;
	justify-content: space-between;
`;
export const Tool = styled.button`
	width: 50px;
	height: 50px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1em;
	border: 0px solid transparent;
	background-color: rgba(100, 77, 237, 0.08);
	border-radius: 1.25em;
	transition: all .2s linear;
	cursor: pointer;
	&:hover {
		transform: scale(1.1);
	}
`;
