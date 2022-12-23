import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { Button } from 'reactstrap';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <Button
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
          color='danger'
        >  <i class="bi bi-trash-fill"></i> </Button>
        <Button
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
          color='warning'
        > <i class="bi bi-pencil-square"></i> </Button>
      </div>
    </div>
  ));
};

export default Todo;