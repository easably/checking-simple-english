
import React, { Component } from 'react';

import { simple_1000_Text } from './components/CheckText/Simple_1000_Text';
import { simple_100_Text } from './components/CheckText/Simple_100_Text';
import { getDOMText } from './components/GetDOMText/getDOMText';


export default class App extends Component {

  state = {
    selectedText: '',
    bodyText: '',
  }

  componentDidMount() {

		getDOMText().then(text => {
			this.setState({
				bodyText: text
			})
    });
    
    document.addEventListener("mouseup", this.getText);
  }

  componentWillUnmount() {
    document.removeEventListener("mouseup", this.getText);
  }

  getText = e => {
    
    let getSelection = window.getSelection && window.getSelection();

    if (
      getSelection &&
      getSelection.rangeCount &&
      getSelection.rangeCount > 0
    ) {

      this.setState({
        selectedText: getSelection.toString()
      });
    }
  };

  
  render() {

    const { selectedText, bodyText } = this.state;

    return (

      <div className="Extension">

        <h1 style={{ color: "red" }}>Statistics of page's body will go here: </h1>
        
      <h2>This page covers <span style={{ fontWeight: "900", color:"red"}}>{simple_1000_Text(bodyText)}</span> of common 1000 English words 
          and <span style={{ fontWeight: "900", color:"red"}}>{simple_100_Text(bodyText)}</span> of common 100 English words.
      </h2>

        <br/>

        <h1 style={{ color: "blue" }}>Highlight any text to extimate it's simplicity based on most common English words</h1>

        <h2>In the first batch of results, released late Tuesday, former Vice President Joe Biden and Vermont Sen.
          Bernie Sanders were essentially tied, with each winning about 33% of the roughly 1 million votes counted.</h2>

        <h1 style={{ color: "blue" }}>Your text covers <span style={{ fontWeight: "900", color: 'red' }}>{simple_1000_Text(selectedText)} </span>
        of 1000 most common English words
        and <span style={{ fontWeight: "900", color: 'red' }}>{simple_100_Text(selectedText)} </span>
        of 100 most common English words</h1>
        
      </div>

    );
  }
};