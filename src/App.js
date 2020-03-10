import React from 'react';

import { complexText } from './components/CheckText/ComplexText';


function App() {

  return (
    <div className="extension">
      <h1>This text: "Translate words while reading an article or watching your favourite movie." is simple for
        <h2>{complexText("Translate words while reading an article or watching your favourite movie.")}</h2>
      </h1>
    </div>
  );
}

export default App;
