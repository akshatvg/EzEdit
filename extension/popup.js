function editsite() {
    console.log('this');
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        let url = tabs[0].url;
    });
    var s = document.createElement('script');
    s.src = chrome.extension.getURL('script.js');
    (document.head || document.documentElement).appendChild(s);
    s.onload = function() {
        s.parentNode.removeChild(s);
    };
}