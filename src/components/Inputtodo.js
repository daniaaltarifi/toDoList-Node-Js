import React, { useRef } from 'react';

function Inputtodo({ createtodo }) {
  const inputRef = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createtodo(inputRef.current.value);
    inputRef.current.value = '';
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <input type="submit" />
        
      </form>
    </div>
  );
}

export default Inputtodo;