chrome.storage.local.get(null, (storedData) => {
  const currentDomain = window.location.hostname;

  if (storedData[currentDomain]) {
    document.body.style.backgroundColor = storedData[currentDomain];
  }
});
