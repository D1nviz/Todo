import styled, { keyframes } from "styled-components";
const loaderAnimation = keyframes`
from {
  opacity: 0;
}

to {
  opacity: 1;
}
`;

export const Loader = styled.div`
	position: relative;
	margin: 50% auto;
	div {
		background: #ddd;
		width: 10px;
		height: 10px;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -5px;
		margin-left: -5px;
		&.square-1 {
			margin-top: -25px;
			margin-left: -25px;
			animation: ${loaderAnimation} 675ms ease-in-out 0s infinite alternate;
		}
		&.square-2 {
			margin-top: -25px;
			animation: ${loaderAnimation} 675ms ease-in-out 75ms infinite alternate;
		}
		&.square-3 {
			margin-top: -25px;
			margin-left: 15px;
			animation: ${loaderAnimation} 675ms ease-in-out 150ms infinite;
		}
		&.square-4 {
			margin-left: -25px;
			animation: ${loaderAnimation} 675ms ease-in-out 225ms infinite;
		}
		&.square-5 {
			animation: ${loaderAnimation} 675ms ease-in-out 300ms infinite;
		}
		&.square-6 {
			margin-left: 15px;
			animation: ${loaderAnimation} 675ms ease-in-out 375ms infinite;
		}
		&.square-7 {
			margin-top: 15px;
			margin-left: -25px;
			animation: ${loaderAnimation} 675ms ease-in-out 450ms infinite;
		}
		&.square-8 {
			margin-top: 15px;
			animation: ${loaderAnimation} 675ms ease-in-out 525ms infinite;
		}
		&.square-9 {
			margin-top: 15px;
			margin-left: 15px;
			animation: ${loaderAnimation} 675ms ease-in-out 600ms infinite;
		}
	}
`;
export const Square = styled.div``;
