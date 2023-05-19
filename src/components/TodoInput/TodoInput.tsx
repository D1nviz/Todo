import React, { FC } from "react";
import { Form, Formik } from "formik";
import { v4 as uuidv4 } from 'uuid';
import * as Yup from "yup";
import { Input, InputContainer, InputLabel } from "./styles";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { todoCreated } from "../../Store/reducers/TodoSlice";


const TodoInput: FC = () => {
  const dispatch = useAppDispatch();
	return (
		<InputContainer>
			<Formik 
        initialValues={{
          todo: ""
        }}
        validationSchema={Yup.object({
          todo: Yup.string()
          .min(2, "Min 2 letters")
          .required("Обязательное поле")
        })}
        onSubmit={(todo) => {
          dispatch(todoCreated({
            id: uuidv4(),
            todo: todo.todo
          }));
         
        }}>
				<Form>
					<InputLabel>
						<Input
							name="todo"
							id="todo"
							placeholder="Add new Todo!"
						/>
					</InputLabel>
				</Form>
			</Formik>
		</InputContainer>
	);
};

export default TodoInput;
