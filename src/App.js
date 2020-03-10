import React from 'react';

import { simpleText } from './components/CheckText/SimpleText';


function App() {

  return (
    <div className="extension">
      <h1>This text: "Translate words while reading an article or watching your favourite movie." is simple for
        <p>{simpleText("Translate words while reading an article or watching your favourite movie.")}</p>
      </h1>
      <h1>This text: "We help to learn the language for free and comfortably, doing what you love - watching TV shows, reading books, or listening to music." is simple for
        <p>{simpleText("We help to learn the language for free and comfortably, doing what you love - watching TV shows, reading books, or listening to music.")}</p>
      </h1>
    </div>
  );
}

export default App;
