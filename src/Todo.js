import React from 'react';


function Todo({ todo, index, removeTodo}) {
    return (
        <div  >
          {todo.text}
          <div className="right">
          <button onClick={() => removeTodo(index)}>x</button>
         
          </div>
        </div>
  
        
    );
  }export default Todo;