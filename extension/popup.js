document.addEventListener("DOMContentLoaded", function() {
    var style = document.createElement("link");
    style.rel = "stylesheet";
    style.type = "text/css";
    style.href = chrome.extension.getURL("style.css");
    (document.head || document.documentElement).appendChild(style);
    document.getElementById("editBtnEzEdit").addEventListener("click", sendDetails);

<<<<<<< HEAD
  document.getElementById("signinEzEdit").addEventListener("click", signin);

  function signin() {
    localStorage.setItem("PAT", document.getElementById("ezEditPAT").value);
    document.getElementById("ezEditPAT").value = "";
  }

  function sendDetails() {
    console.log("Reached here: Send details");
    document.getElementById("editBtnEzEdit").disabled = "true";
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, "edit");
    });
  }
});
=======
    document.getElementById("submitEditBtnEzEdit").addEventListener("click", sendDetails);

    function sendDetails() {
        console.log("Reached here: Send details");
        document.getElementById("editBtnEzEdit").disabled = "true";
        chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, "edit");
        });
    }
});
>>>>>>> c6c0acfbd88139ec1140841918ecdfc399df34b1
