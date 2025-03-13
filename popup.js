document.getElementById('viewAll').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {
        document.querySelectorAll('.js-reviewed-checkbox').forEach(input => input.checked || input.click());
      }
    });
  });
});

document.getElementById('unviewAll').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {
        document.querySelectorAll('.js-reviewed-checkbox').forEach(input => !input.checked || input.click());
      }
    });
  });
});