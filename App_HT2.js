import './App.css';
import React from "react";
import TestClassComponent from "./HT2/TestClassComponent";
import Counter from "./HT2/Counter";
import Site from "./HT2/Site";
import { useState } from 'react';


function App() {

  const [counter, setCounter] = useState(0);

  return (
    <>

      <TestClassComponent label="Test Label" ></TestClassComponent>
      <TestClassComponent></TestClassComponent>

      <Counter></Counter>

      <button onClick={() => setCounter(counter + 1)}>increment app counter</button>
      <h1>{counter}</h1>
      <Counter appCounter={counter}></Counter>

      <Counter counter={counter} setCounter={setCounter}></Counter>

      <Site></Site>

    </>
  );
}

export default App;