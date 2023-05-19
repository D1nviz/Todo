import React, {FC} from 'react';
import TodoHeader from '../TodoHeader/TodoHeader';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';
import { useAppSelector } from '../../hooks/redux';
import { RootState } from '../../Store/store';

const App:FC = ()=> {
  const {} = useAppSelector((state:RootState) => state.todoReducer.todos)
  
 
  return (
    <div className='wrapper'>
      <TodoHeader/>
      <TodoInput/>
      <TodoList />
    </div>
  );
}

export default App;
