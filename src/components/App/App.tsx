import React, {FC} from 'react';
import TodoHeader from '../TodoHeader/TodoHeader';
import TodoInput from '../TodoInput/TodoInput';
import TodoListItem from '../TodoListItem/TodoListItem';

const App:FC = ()=> {
  return (
    <div className='wrapper'>
      <TodoHeader/>
      <TodoInput/>
      <TodoListItem/>
    </div>
  );
}

export default App;
