
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
  const updateTodo = (e, index) =>{
    const newTodos = [...todos];
     newTodos[index].text = e.target.value; 
     setTodos(newTodos);
     
  }
  // console.log(setTodos,"123456789");
 
  const  onTodoClick = index =>{
    setTodos(todos.map((val, key)=>{
      if(key == index){
        if(val.checked){
          delete val.completeTime;
        }
        val['completeTime']= new Date()
       
        val['checked'] = !val.checked;
      }
      return val
    }))
  }


  return (
    <div className="app">
     <TodoForm addTodo={addTodo} />
      <div className="todo-list">
        {todos.length ? ( 
        todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            removeTodo={removeTodo}
            onTodoClick={onTodoClick}
            updateTodo={updateTodo}
          />
        ))
        ) : ''}
       
      </div>
      <div className="status-todo">
             <a href="#">ALL</a>
              <a href="#">Active</a>
              <a href="#">Completed</a>
          </div>
    </div>
  );
}

export default App;