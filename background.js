chrome.browserAction.onClicked.addListener(buttonHandler);
chrome.commands.onCommand.addListener(commandHandler)

function buttonHandler(tab) {
    let msg = {txt: "weeb lixo"}
    chrome.tabs.sendMessage(tab.id, msg);
}

function commandHandler(command) {
    chrome.tabs.getAllInWindow(null, function(tabs) {
        for (var i = 0; i < tabs.length; i++) {
            console.log(tabs[i].url);
            if (tabs[i].url.includes("youtube.com/watch")) {
                console.log(document.getElementsByName("video")[0])
                chrome.tabs.sendMessage(tabs[i].id, {
                    action: command
                });
                break;
            }
        }
    });
};
