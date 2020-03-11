/*global chrome*/

export const getDOMText = (results) => {
  console.log(results);
}

chrome.tabs.query({active: true}, function(tabs) {
  var tab = tabs[0];
  chrome.tabs.executeScript(tab.id, {
    code: 'document.querySelector("body").innerText'
  }, getDOMText);
});
