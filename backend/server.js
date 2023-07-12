const express = require("express");
const {v4:uuidv4}=require("uuid")
const cors_proxy = require('cors-anywhere');
var app = express();
const cors=require("cors")
app.use(cors())
app.use(express.json({extended:false}))
 
const port = 8000;
let todolist = [
  {
    message: "car wash..",
    id: 1,
  },
  {
    message: "Go for run..",
    id: 2,
  },
  {
    message: "Cook dinner..",
    id: 3,
  },
];




app.get("/", (req, res) => {
  res.status(200).json(todolist);
});
app.post("/", (req, res) => {
let counter=3;
let index;
for ( index=3 ; index <todolist.length; index++) {
  const element = index;
  
}
index++;
  const newTodo = {
    message: req.body.message,
    id:index,
   
  };
  todolist.push(newTodo);
  res.status(201).json(todolist);
});
app.patch('/:id', (req, res) => {
  let id = req.params.id * 1;
  let toDoUpdate = todolist.find(el => el.id === id);
  let index = todolist.indexOf(toDoUpdate);
  Object.assign(toDoUpdate, req.body);

  res.status(200).json(todolist);
});
app.delete('/:id', (req, res) => {
  
  const id = req.params.id - 1;
  
  // Find the index of the todo item with the specified id
  const index = todolist.find((item) => item.id === id);
  
  if (id !== -1) {
    // Remove the todo item from the todolist array
    todolist.splice(id, 1);
    
    res.status(200).json({ message: 'Todo item deleted successfully' });
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});


app.listen(port, () => {
  console.log(`server running in port ${port}`);
});
