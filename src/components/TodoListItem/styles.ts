import styled from "styled-components";

interface ITextProps {
	isCompleted: boolean;
}
export const ItemsContainer = styled.div`
	margin: 0 auto;
	width: 100%;
	border-bottom: 2px solid #4443435f;
	padding: 0 15px;
	transition: all 0.2s ease-in-out;
	:hover {
		transform: scale(1.01);
		background-color: #4443435f;
		border-radius: 5px;
	}
`;
export const Item = styled.div`
	padding-top: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const TextContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
`;
export const TextInput = styled.input<ITextProps>`
	font-size: 18px;
	color: rgb(218, 219, 217);
	background-color: inherit;
	border: none;
	padding: 15px 0 15px 10px;
	text-decoration: ${({ isCompleted }) =>
		isCompleted ? "line-through" : "none"};
	:focus {
		outline: none;
	}
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
	transition: all 0.2s linear;
	cursor: pointer;
	:hover {
		transform: scale(1.1);
	}
`;

export const CheckBoxContainer = styled.label`
	display: block;
	position: relative;
	cursor: pointer;
	font-size: 20px;
	user-select: none;
	overflow: hidden;
`;
export const CheckMark = styled.div`
	position: relative;
	top: 0;
	left: 0;
	height: 1.3em;
	width: 1.3em;
	border: 2px solid #414141;
	transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);

	::after {
		content: "";
		position: absolute;
		left: 0.45em;
		top: -2em;
		width: 0.25em;
		height: 0.5em;
		border: solid white;
		border-width: 0 0.15em 0.15em 0;
		transform: rotate(45deg);
		transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
	}

	::before {
		left: 0.45em;
		top: 2em;
		width: 0.25em;
		height: 0.5em;
		border: solid white;
		border-width: 0 0.15em 0.15em 0;
		transform: rotate(45deg);
	}
`;
export const CheckBox = styled.input`
	position: absolute;
	opacity: 0;
	cursor: pointer;
	height: 0;
	width: 0;
	:checked ~ ${CheckMark} {
		border-image: linear-gradient(-45deg, #da3a3a 0%, #8361d9 100%);
		border-image-slice: 1;
		::after {
			top: 0.25em;
		}
	}
`;
