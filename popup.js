// popup.js
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('toggle').addEventListener('click', async () => {
      let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
      chrome.storage.local.get(['darkMode'], function(result) {
        if (result.darkMode) {
          chrome.storage.local.set({darkMode: false});
        } else {
          chrome.storage.local.set({darkMode: true});
        }
      });
  
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['darkmode.js']
      });
    });
  });
  