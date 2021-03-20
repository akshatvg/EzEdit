document.addEventListener("DOMContentLoaded", function() {
  var style = document.createElement("link");
  style.rel = "stylesheet";
  style.type = "text/css";
  style.href = chrome.extension.getURL("EzEditCSS.css");
  (document.head || document.documentElement).appendChild(style);
  document.getElementById("editBtnEzEdit").addEventListener("click", sendDetails);

  document.getElementById("submitEditBtnEzEdit").addEventListener("click", sendDetails);

  function sendDetails() {
      console.log("Reached here: Send details");
      document.getElementById("editBtnEzEdit").disabled = "true";
      chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, "edit");
      });
  }
});