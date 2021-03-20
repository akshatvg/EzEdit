document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('editbutton').addEventListener('click', sendeets);

    function sendeets() {
        console.log('reached here');
        chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, "edit");
        })
    }
});