import React, { Component } from 'react';

import { checkTextSimple } from '../../helpers/checkTextSimple/checkTextSimple';
import { checkWordsNum } from '../../helpers/checkWordsNum/checkWordsNum';
import { getDOMText } from '../../helpers/GetDOMText/getDOMText';

import { common_100_EnglishWords } from '../../../assets/EnglishCommonWords/100_Words/100_words';
import { common_1000_EnglishWords } from '../../../assets/EnglishCommonWords/1000_Words/1000_words';
import { my_Vocabulary } from '../../../assets/myVocabulary/myVocabulary';


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

      <div style={{ width: "450px" }}>

        <h1 style={{ color: "red" }}>Statistics of page's content: </h1>

        <h2>Words from "Common Thousand": <span style={{ color: "red" }}>{checkWordsNum(bodyText, common_1000_EnglishWords)}</span>, <br/> 
        covers <span style={{ color: "red" }}>{checkTextSimple(bodyText, common_1000_EnglishWords)}</span> of page's content.
    </h2>
        <h2>Words from "Common Hundred": <span style={{ color: "red" }}>{checkWordsNum(bodyText, common_100_EnglishWords)}</span>, <br/>
        covers <span style={{ color: "red" }}>{checkTextSimple(bodyText, common_100_EnglishWords)}</span> of page's content.
    </h2>
        <h2>Words from "My Vocabulary": <span style={{ color: "red" }}>{checkWordsNum(bodyText, my_Vocabulary)}</span>, 
        covers <span style={{ color: "red" }}>{checkTextSimple(bodyText, my_Vocabulary)}</span>.
    </h2>

        <br />

        <h1 style={{ color: "blue" }}>Highlight any text to extimate it's simplicity based on most common English words</h1>

        <h2>In the first batch of results, released late Tuesday, former Vice President Joe Biden and Vermont Sen.
          Bernie Sanders were essentially tied, with each winning about 33% of the roughly 1 million votes counted.</h2>

        <h1 style={{ color: "blue" }}>Your text
        covers <span style={{ color: 'red' }}>{checkTextSimple(selectedText, common_1000_EnglishWords)} </span>
        of 1000 most common English words
        and <span style={{ color: 'red' }}>{checkTextSimple(selectedText, common_100_EnglishWords)} </span>
        of 100 most common English words</h1>

      </div>

    );
  }
};
