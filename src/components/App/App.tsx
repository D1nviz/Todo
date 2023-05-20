import React, {FC} from 'react';
import TodoHeader from '../TodoHeader/TodoHeader';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';


const App:FC = ()=> {
  return (
    <div className='wrapper'>
      <TodoHeader/>
      <TodoInput/>
      <TodoList />
    </div>
  );
}

export default App;
