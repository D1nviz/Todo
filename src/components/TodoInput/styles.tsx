import styled from "styled-components";

import { Field, ErrorMessage } from "formik";
export const InputContainer = styled.div`
	margin: 20px auto;
	width: 100%;
	display: flex;
	justify-content: center;
`;

export const InputBorder = styled.span`
	 position: absolute;
  background: var(--border-after-color);
  width: 0%;
  bottom: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, #da3a3a 0%,   #8361d9 100%);
  transition: width 0.4s cubic-bezier(0.42, 0, 0.58, 1.00);
`;
export const Input = styled(Field)`
 color: #fff;
  font-size: 0.9rem;
  background-color: transparent;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: var(--border-height) solid var(--border-before-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 1.2rem;
  padding-inline: 1em;
  padding-block: 0.8em;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.797);
	outline: none;
	&:focus + ${InputBorder}{
		width: 100%;
	}
	::placeholder {
		text-align: center;
	}
`;
export const InputLabel = styled.label`
	display: block;
	position: relative;
	width: 300px;
`;
export const StyledErrorMessage = styled(ErrorMessage)`
	text-align: center;
	margin-top: 10px;
` 
