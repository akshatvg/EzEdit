chrome.runtime.onMessage.addListener(function (request) {
    startEditing(request);
})

function startEditing(request) {
    document.designMode = "on";
    console.log(request);
}
