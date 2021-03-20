chrome.runtime.onMessage.addListener(function(request) {
    startEditing(request);
})

function startEditing(request) {
    if (request == "edit")
        document.designMode = "on";
    else {
        var theHtmlCode = document;
        [].forEach.call(document.querySelectorAll("script[src]"), function(src) {

            console.log(src);

        });
        [].forEach.call(document.querySelectorAll("link[href]"), function(href) {

            console.log(href);

        });
    }
    //will add the saving part here

    console.log(request);
}