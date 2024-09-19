import React, { useState } from 'react'; // Import useState from React

import './App.css';

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    // Using the functional form of setCounter to ensure the previous state is used correctly
    setCounter(prevCounter => prevCounter + 1);
   
  }

  const removeValue = () => {
    setCounter(prevCounter => prevCounter - 1);
  }

  return (
    <>
      <h1> React hooks</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button> 
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
