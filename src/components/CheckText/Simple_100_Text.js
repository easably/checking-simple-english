import { common_100_EnglishWords } from '../../assets/EnglishCommonWords/100_Words/100_words';


// Export reusable function to check text's complexity
export const simple_100_Text = (text) => {

  const wordsArray = text.replace(/[,.!?]/, "").split(/\s+/);

  let numberMatches = 0;

  wordsArray.forEach((word) => {
    if(common_100_EnglishWords.some(e => e.toUpperCase() === word.toUpperCase())) {
      numberMatches++;
    }
  });

  const textSimplicity = (numberMatches / wordsArray.length * 100).toFixed(1);
  
  return `${textSimplicity}%`;
  
};