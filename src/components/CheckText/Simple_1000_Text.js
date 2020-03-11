import { common_1000_EnglishWords } from '../../assets/EnglishCommonWords/1000_Words/1000_words';


// Export reusable function to check text's complexity
export const simple_1000_Text = (text) => {

  const wordsArray = text.replace(/[,.!?]/, "").split(/\s+/);

  let numberMatches = 0;

  wordsArray.forEach((word) => {
    if(common_1000_EnglishWords.some(e => e.toUpperCase() === word.toUpperCase())) {
      numberMatches++;
    }
  });

  const textSimplicity = (numberMatches / wordsArray.length * 100).toFixed(1);
  
  return `${textSimplicity}%`;
  
};
