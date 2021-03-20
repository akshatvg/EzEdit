chrome.runtime.onMessage.addListener(function (request) {
  startEditing(request);
});

function startEditing(request) {
  document.designMode = "on";
  console.log(request);
}

function sendRequest(data, token, url) {
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });

  xhr.open("PUT", url);
  xhr.setRequestHeader("Authorization", `token ${token}`);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.send(JSON.stringify(data));
}

// Sameple for @anand -> code is actual code, repo -> raysandeep/abcd.github.io, filepath -> index.html, token from localstorage
function sendContent(code, repo, filepath, token) {
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  var url = `https://api.github.com/repos/${repo}/contents/${filepath}?ref=master`;
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
      var responseData = JSON.parse(this.responseText);
      var data = {
        message: "EzEditUpdate",
        branch: "master",
        content: utf8.decode(base64.encode(code)),
        sha: responseData.sha,
      };
      sendRequest(data, token, url);
    }
  });

  xhr.open("GET", url);
  xhr.setRequestHeader("Authorization", `token ${token}`);

  xhr.send();
}

chrome.runtime.onMessage.addListener(function (request) {
  startEditing(request);
});

function startEditing(request) {
  if (request == "edit") document.designMode = "on";
  else {
    var theHtmlCode = document;
    var theCssCode = document.styleSheets;
    var theJsCode = document.scripts;
  }
  //will add the saving part here

  console.log(request);
}
