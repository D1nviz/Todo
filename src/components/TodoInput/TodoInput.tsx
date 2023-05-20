import { FC } from "react";
import { Form, Formik } from "formik";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";
import { Input, InputContainer, InputLabel, InputBorder } from "./styles";
import { useAppDispatch } from "../../hooks/redux";
import { todoCreated } from "../../Store/reducers/TodoSlice";

const TodoInput: FC = () => {
	const dispatch = useAppDispatch();
	return (
		<InputContainer>
			<Formik
				initialValues={{
					todo: "",
				}}
				validationSchema={Yup.object({
					todo: Yup.string()
						.min(2, "Min 2 letters")
						.required("Обязательное поле"),
				})}
				onSubmit={(todo, { resetForm }) => {
					dispatch(
						todoCreated({
							id: uuidv4(),
							task: todo.todo,
							isCompleted: false,
						})
					);
					resetForm();
				}}
			>
				<Form>
					<InputLabel className="form-control">
						<Input className="input input-alt"autoComplete="off" name="todo" id="todo" placeholder="Add new Todo!" />
  					<InputBorder className="input-border input-border-alt"></InputBorder>
					</InputLabel>
					
				</Form>
			</Formik>
		</InputContainer>
	);
};

export default TodoInput;
