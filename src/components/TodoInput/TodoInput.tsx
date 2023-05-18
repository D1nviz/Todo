import React, { FC, useState } from "react";
import { Input, InputContainer, InputLabel } from "./styles";

const TodoInput: FC = () => {
  const [value, setValue] = useState<string>("");
  const changHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
	return (
		<InputContainer>
			<InputLabel>
				<Input 
          value={value}
          onChange={changHandler}
          placeholder="Add new Todo!" />
			</InputLabel>
		</InputContainer>
	);
};

export default TodoInput;
