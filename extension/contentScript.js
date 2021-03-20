chrome.runtime.onMessage.addListener(function(request) {
    startEditing(request);
})

function startEditing(request) {
    if (request == "edit")
        document.designMode = "on";
    else
    //will add the saving part here
        console.log(request);
}