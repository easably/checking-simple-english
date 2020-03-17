/*global chrome*/


export const getDOMText = () => {

  chrome.tabs.query({active: true}, (tabs) => {

  var tab = tabs[0];

  chrome.tabs.executeScript(tab.id, {
    code: 'document.querySelector("body").innerText'
  }, (results) => {
    console.log(results);
  });
  
});
};
