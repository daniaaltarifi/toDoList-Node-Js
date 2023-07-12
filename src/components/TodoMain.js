import React from 'react';
import Itemtodo from './Itemtodo';
function TodoMain({ todo,updateTodo,deleteTodo }) {
  if (!todo || todo.length === 0) {
    return <div>No todo items</div>;
  }

  return (
    <div>
      {todo.map((todo, index) => (
        <div key={index}>
          <Itemtodo key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
        </div>
      ))}
    </div>
  );
}

export default TodoMain;