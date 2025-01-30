document.getElementById("saveBtn").addEventListener("click", () => {
  const domain = document.getElementById("domain").value.trim();
  const color = document.getElementById("color").value;

  if (domain) {
    chrome.storage.local.set({ [domain]: color }, () => {
      alert(`Color saved for ${domain}`);
    });
  } else {
    alert("Please enter a valid domain.");
  }
});
