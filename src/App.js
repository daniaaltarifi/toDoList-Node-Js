import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import TodoMain from "./components/TodoMain";
import Header from "./components/Header";
import Inputtodo from "./components/Inputtodo";

function App(onDel) {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    try {
      fetch('http://localhost:8000/')
        .then((response) => response.json())
        .then((data) => setTodo(data));
    } catch (error) {
      console.log(error);
    }
  }, []);
  async function createtodo(text) {
    try {
      const response = await axios.post('http://localhost:8000/', { message: text });
      setTodo(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  }


  async function updateTodo(id, updatedData) {
    try {
      await axios.patch(`http://localhost:8000/${id}`, updatedData);
      const response = await axios.get("http://localhost:8000/");
      const updatedTodoList = response.data;
      setTodo(updatedTodoList);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  function deleteTodo(id ) {
    try {
      const response= fetch(`http://localhost:8000/${id}`,{
      method: 'delete'
    })
    .then((response) => response.json()  )
    .then(data=>{
      console.log(data);
      // setTodo(response.data)
      // console.log(response.data)
    })
  }
     catch (error) {
      console.log("error")
    }
    
  }
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Inputtodo createtodo={createtodo} />
        <TodoMain todo={todo}  updateTodo={updateTodo} deleteTodo={deleteTodo}/>
      </div>
    </div>
  );
}

export default App;