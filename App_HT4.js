import './App.css';
import React, { useEffect, createRef, useRef, useState, Fragment, createContext, useContext } from "react";
import Figure from './HT4/Figure.jsx'
import Accordion from './HT4/Accordion.jsx'
import accordionData from './HT4/accordionData';


function App() {

  return (
    <>
      <Figure ></Figure>

      <div>
        <h3>Accordion component</h3>
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </>
  );
};


export default App;