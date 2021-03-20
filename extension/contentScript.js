chrome.runtime.onMessage.addListener(function(request) {
    startEditing(request);
})

function startEditing(request) {
    if (request == "edit")
        document.designMode = "on";
    else {
        var theHtmlCode = document;
        var theCssCode = document.styleSheets;
        var theJsCode = document.scripts;
        console.log(theJsCode);
    }
    //will add the saving part here

    console.log(request);
}