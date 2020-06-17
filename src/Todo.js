import React from 'react';


function Todo({ todo, index, removeTodo, onTodoClick ,updateTodo , setValues}) {    
    return (
        <div  className="todo">
        <div className="output-decoration"
        style={{ textDecoration: todo.checked ? "line-through" : "" }}>
         <input type="checkbox" checked={todo.checked} onClick ={() => onTodoClick(index)}/>
            <div className="BOX-2">
            <input type = "text"  value={todo.text} onChange = {(e) => updateTodo(e , index)}/>
            
            </div>
            <div className="BOX-1">
                {todo.time.toString().slice(0,24)}  
                </div>
            
                {/* {console.log(todo.time.toString().slice(5,24))} */}  
            </div>
          <div>
            <button onClick={() => removeTodo(index)}>x</button>
            
          </div>
          
        </div>
  
        
    );
  }export default Todo;