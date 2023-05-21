import styled, { keyframes } from "styled-components";

interface ITextProps {
	isCompleted: boolean;
}
export const ItemsContainer = styled.div`
	margin: 0 auto;
	width: 100%;
	background-color: #272626;
	padding: 0 15px;
	border-radius: 40px;
	transition: all .2s ease-in-out;
	:hover {
		transform: scale(1.02)
	}
`;
export const Item = styled.div`
	margin-top: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const Text = styled.p<ITextProps>`
  font-size: 18px;
	padding: 15px 0;
	cursor: pointer;
	text-decoration: ${({ isCompleted }) => (isCompleted ? 'line-through' : 'none')};
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
	:hover {
		transform: scale(1.1);
	}
`;


const jellyAnimation = keyframes`
  from {
    transform: scale(1, 1);
  }

  30% {
    transform: scale(1.25, 0.75);
  }

  40% {
    transform: scale(0.75, 1.25);
  }

  50% {
    transform: scale(1.15, 0.85);
  }

  65% {
    transform: scale(0.95, 1.05);
  }

  75% {
    transform: scale(1.05, 0.95);
  }

  to {
    transform: scale(1, 1);
  }
`;

export const CheckBoxContainer = styled.div`
`;
export const CheckBox = styled.input`
	position: relative;
	top: 1px;
	width: 27px;
	height: 27px;
	border: 1px solid #c8ccd4;
	border-radius: 3px;
	transition: all 0.1s ease;
	cursor: pointer;
	display: block;
	:after {
	content: '';
	position: absolute;
	top: 2px;
	left: 8px;
	width: 7px;
	height: 14px;
	opacity: 0;
	transform: rotate(45deg) scale(0);
	border-right: 2px solid #fff;
	border-bottom: 2px solid #fff;
	transition: all 0.3s ease;
	transition-delay: 0.15s;
	:checked  {
		border-color: transparent;
		background: #6871f1;
		animation: ${jellyAnimation} 0.6s ease;
	}
	:checked::after {
		opacity: 1;
 		transform: rotate(45deg) scale(1);
	}
}
`





