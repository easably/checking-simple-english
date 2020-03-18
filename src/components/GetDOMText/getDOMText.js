/*global chrome*/

export const getDOMText = async () => {

  return new Promise((resolve, reject) => {

    chrome.tabs.query({ active: true }, tabs => {
      
      var tab = tabs[0];

      chrome.tabs.executeScript(
        tab.id,
        {
          code: 'document.querySelector("body").innerText'
        },

        results => {
          resolve(results && results[0]);
        }

      );
    });
  });
};