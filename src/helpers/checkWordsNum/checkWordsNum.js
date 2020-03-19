
export const checkWordsNum = (text, commonWords) => {

    const wordsArray = text.replace(/[,.!?]/, "").split(/\s+/);
  
    let numberMatches = 0;
  
    wordsArray.forEach((word) => {
      if(commonWords.some(e => e.toUpperCase() === word.toUpperCase())) {
        numberMatches++;
      }
    });
  
    return numberMatches;
    
  };