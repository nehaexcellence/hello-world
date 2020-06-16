import React from 'react';


function Todo({ todo, index, removeTodo, onTodoClick}) {    
    return (
        <div  className="todo">
        <div className="output-decoration"
        style={{ textDecoration: todo.checked ? "line-through" : "" }}>
            <div className="BOX-2">
            {todo.text}
            </div>
                
            <div className="BOX-1">
                {todo.time.toString().slice(0,24)}  
                </div>
                {/* {console.log(todo.time.toString().slice(5,24))} */}
                
                 
                
            </div>
            
         
          <div>

            <input type="checkbox" checked={todo.checked} onClick ={() => onTodoClick(index)}/>
            <button onClick={() => removeTodo(index)}>x</button>
            
          </div>
        </div>
  
        
    );
  }export default Todo;