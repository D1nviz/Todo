import { FC } from "react";
import { Form, Formik } from "formik";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";
import { useAppDispatch } from "../../hooks/redux";
import { todoCreated } from "../../Store/reducers/TodoSlice";
import {
	Input,
	InputContainer,
	InputLabel,
	InputBorder,
	StyledErrorMessage,
} from "./styles";
import { useHttp } from "../../hooks/http.hook";

const TodoInput: FC = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const { request } = useHttp();

	return (
		<InputContainer>
			<Formik
				initialValues={{
					todo: "",
				}}
				validationSchema={Yup.object({
					todo: Yup.string()
						.min(3, "Minimum 3 symbols")
						.required("it's a required field")
						.max(20, "Maximum 20 symbols"),
				})}
				onSubmit={(todo, { resetForm }) => {
					const newTodo = {
						id: uuidv4(),
						task: todo.todo,
						isCompleted: false,
					};
					request(
						"http://localhost:3001/todos",
						"POST",
						JSON.stringify(newTodo)
					)
						.then(() => dispatch(todoCreated(newTodo)))
						.catch((e) => console.log(e));
					resetForm();
				}}
			>
				{({ touched, setFieldTouched }) => (
					<Form>
						<InputLabel>
							<Input
								autoComplete="off"
								name="todo"
								id="todo"
								placeholder="Write new task"
								onBlur={() => {
									setFieldTouched("todo", false);
								}}
								onFocus={() => {
									setFieldTouched("todo", true);
								}}
							/>
							<InputBorder></InputBorder>
						</InputLabel>
						{touched ? (
							<StyledErrorMessage name="todo" component="div" />
						) : null}
					</Form>
				)}
			</Formik>
		</InputContainer>
	);
};

export default TodoInput;
