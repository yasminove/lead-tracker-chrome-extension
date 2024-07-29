// chrome.runtime.onInstalled.addListener(function () {
//     console.log("Extension Installed");
// });

// chrome.tabs.query({}, function (tabs) {
//     console.log(tabs); // Logs all tabs
// });


chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension Installed");
    chrome.tabs.query({}, (tabs) => {
        console.log(tabs); // Logs all tabs
    });
});