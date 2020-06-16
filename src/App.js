import React, { useState } from "react";
import "./App.css";
import TodoForm from './TodoForm';
import Todo from './Todo';



function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    const newTodos = [...todos, { text, checked:false, time: new Date() }];
    setTodos(newTodos);
    
  };

  const removeTodo = index =>{
    setTodos(todos.filter((val, key)=>{
      if(key !== index){
        return val
      }
    }))
  }
 
  const  onTodoClick = index =>{
    setTodos(todos.map((val, key)=>{
      if(key == index){
        if(val.checked){
          delete val.completeTime;
        }
        val['completeTime']= new Date()
        // console.log(val,"asdf");
        val['checked'] = !val.checked;
      }
      return val
    }))
  }

  

  return (
    <div className="app">
     <TodoForm addTodo={addTodo} />
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            removeTodo={removeTodo}
            onTodoClick={onTodoClick}
          />
        ))}
       
      </div>
    </div>
  );
}

export default App;