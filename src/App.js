import React, { useState } from "react";
import "./App.css";
import TodoForm from './TodoForm';
import Todo from './Todo';



function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const removeTodo = index =>{
    
     const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
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
           
          />
        ))}
       
      </div>
    </div>
  );
}

export default App;