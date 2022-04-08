import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Take dogs for walk', 'Take the rubbish out', 'qazi wants to livestream today']);
  const [input, setInput] = useState('');
  console.log('❤', input);

  const addTodo = (event) => {
    //this will fire off  when we click the button
    event.preventDefault(); //will stop the REFRESH
    console.log("💨", "I'm working!!!");
    setTodos([...todos, input]);
    setInput(''); //clear up the input after hitting clicking add todo button
    
  }
  return (
    <div className="App">
      <h1>Hello Todo App 🤍</h1>

     <form>
        <input value={input} onChange={event => setInput(event.target.value)}/>
        <button onClick={addTodo}>Add todo</button>
     </form>

      <ul>
        {/* زي وكأنو في مصفوفة وعامل عليها فور لووب */}
        {todos.map(todo => (
          <li>{todo}</li>
        )) }
      </ul>

    </div>
  );
}

export default App;
