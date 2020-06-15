import React, { useState } from 'react';



function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const additem = () => {
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div>
      <input type="text"  value={value} onChange={e => setValue(e.target.value)} />
      <button onClick = {() => additem()}>Add </button>
    </div>
  );
}
function App() {
  const [todos, setTodos] = useState([ ]);

  const addTodo = texts => {
    const newTodos = [...todos, { texts }];
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
             todo={todo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}
function Todo({ todo, index }) {
  return (
    <div className="todo" >
      {todo.texts}
    </div>
  );
}


export default App;
