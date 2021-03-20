chrome.runtime.onMessage.addListener(function(request) {
    changeColor(request)
})

function changeColor(request) {
    document.designMode = "on";
    console.log(request);
}