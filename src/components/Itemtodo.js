import React, { useState } from 'react';
import '../App.css';
function Itemtodo({ todo, updateTodo,deleteTodo }) {
  const [click, setClick] = useState(false);
  const [editMessage, setEditMessage] = useState(todo.message);
const [delText,setDelText]=useState(false)
  const edit = () => {
    setClick(true);
  };

  const allowChange = (e) => {
    setEditMessage(e.target.value);
  };

  const handleSubmit = () => {
    updateTodo(todo.id, { message: editMessage });
    setClick(false);
    console.log(editMessage)
  };
const handleDelete=()=>{
  deleteTodo(todo.id)
  setDelText(true)
  console.log("object")
}
  return (
    <>
      {click ? (
        <div>
          <input type="text" value={editMessage} onChange={allowChange}name='edit' />
          <button onClick={handleSubmit} >Submit</button>
        </div>
      ) : (
        <div className={delText ? "hideText":" "}>
          <h1>{editMessage}</h1>
          <p>{todo.input}</p>
          <button onClick={edit}>EDIT</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}

    </>
  );
}

export default Itemtodo;
