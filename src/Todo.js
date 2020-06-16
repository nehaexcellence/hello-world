import React from 'react';


function Todo({ todo, index, removeTodo}) {
    return (
        <div 
        >
          {todo.text}
          <div >
          <button onClick={() => removeTodo(index)}>x</button>
         
          </div>
        </div>
  
        
    );
  }export default Todo;