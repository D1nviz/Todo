import React, {FC} from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import { useAppSelector } from "../../hooks/redux";
import { useSelector } from "react-redux";
import { TodoState } from "../../Store/reducers/TodoSlice";



const TodoList:FC = () => {
  const todos:TodoState = useSelector((state:any) => state.todoReducer.todos );
  console.log(todos);
  return (
    <div>
      
    </div>
  )
};

export default TodoList;