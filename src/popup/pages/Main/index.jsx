import React, { useState, useEffect } from 'react';

import { checkTextSimple } from '../../helpers/checkTextSimple/checkTextSimple';
import { checkWordsNum } from '../../helpers/checkWordsNum/checkWordsNum';
import { getDOMText } from '../../helpers/GetDOMText/getDOMText';

import { common_100_EnglishWords } from '../../../assets/EnglishCommonWords/100_Words/100_words';
import { common_1000_EnglishWords } from '../../../assets/EnglishCommonWords/1000_Words/1000_words';
import { my_Vocabulary } from '../../../assets/myVocabulary/myVocabulary';

import "./Main.scss";
import Spinner from '../../components/Spinner';

const main = () => {

  const [bodyText, setBodyText] = useState('');

  const [loading, setLoading] = useState(true);

  useEffect( () => {
    getDOMText()
      .then( text => {
        setBodyText(text);
        setLoading(!loading);
      });
 },[]);

 if(loading) {
   return <Spinner/>
 }

  return (
    <div style={{ color: "#fff" }}>
    <h1>Vocabulary in this page: </h1>
    <h3>Words from "Common Thousand": <span style={{ color: "red" }}>{checkWordsNum(bodyText, common_1000_EnglishWords)}</span>, <br />
    covers <span style={{ color: "red" }}>{checkTextSimple(bodyText, common_1000_EnglishWords)}</span> of page's content.
</h3>
    <h3>Words from "Common Hundred": <span style={{ color: "red" }}>{checkWordsNum(bodyText, common_100_EnglishWords)}</span>, <br />
    covers <span style={{ color: "red" }}>{checkTextSimple(bodyText, common_100_EnglishWords)}</span> of page's content.
</h3>
    <h3>Words from "My Vocabulary": <span style={{ color: "red" }}>{checkWordsNum(bodyText, my_Vocabulary)}</span>,
    covers <span style={{ color: "red" }}>{checkTextSimple(bodyText, my_Vocabulary)}</span>.
</h3>
  </div>
  );
};

export default main;
