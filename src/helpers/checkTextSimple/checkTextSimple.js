// Reusable function to check text's complexity
export const checkTextSimple = (text, commonWords) => {

  const wordsArray = text.replace(/[,.!?]/, "").split(/\s+/);

  let numberMatches = 0;

  wordsArray.forEach((word) => {
    if(commonWords.some(e => e.toUpperCase() === word.toUpperCase())) {
      numberMatches++;
    }
  });

  const textSimplicity = (numberMatches / wordsArray.length * 100).toFixed(1);
  
  return `${textSimplicity}%`;
  
};