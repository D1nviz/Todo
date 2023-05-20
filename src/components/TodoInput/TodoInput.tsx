import { FC, useState } from "react";
import { Form, Formik, useField } from "formik";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";
import {
  Input,
  InputContainer,
  InputLabel,
  InputBorder,
  StyledErrorMessage,
} from "./styles";
import { useAppDispatch } from "../../hooks/redux";
import { todoCreated } from "../../Store/reducers/TodoSlice";

const TodoInput: FC = () => {
  const dispatch = useAppDispatch();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <InputContainer>
      <Formik
        initialValues={{
          todo: "",
        }}
        validationSchema={Yup.object({
          todo: Yup.string()
						.min(3, "Minimum 3 symbols")
            .required()
            .max(20, "Maximum 20 symbols"),
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
        {({ errors, touched, setFieldTouched }) => (
          <Form>
            <InputLabel>
              <Input
                autoComplete="off"
                name="todo"
                id="todo"
                placeholder="Write new task"
                onBlur={() => {
                  setFieldTouched("todo", true);
                  setIsFocused(false);
                }}
                onFocus={() => setIsFocused(true)}
              />
              <InputBorder></InputBorder>
            </InputLabel>
            {isFocused && touched.todo && errors.todo && (
              <StyledErrorMessage name="todo" component="div" />
            )}
          </Form>
        )}
      </Formik>
    </InputContainer>
  );
};

export default TodoInput;