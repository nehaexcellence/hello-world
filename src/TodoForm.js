import React,{ useState } from 'react';

function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      // console.log(addTodo);

      setValue("");
    };
  //console.log(value);
    return (
        <div>
             <h1>Todo App</h1>
                <form onSubmit={handleSubmit} class="text-input">
                    <input type="text"  className="input"  value={value} onChange={e => setValue(e.target.value)}
                    />
                    
                </form>
        </div>
       
    );
  }
    export default TodoForm;