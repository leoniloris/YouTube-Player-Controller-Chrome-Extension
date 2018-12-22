chrome.runtime.onMessage.addListener(gotMessage);



function gotMessage(message, sender, sendResponse) {
	runCommand(message);
	// function stopVideo() {
    //     player.stopVideo();
    // }
    // if (player) {
    //     player.getPlayerState() == 1 ? player.pauseVideo() : player.playVideo()
    // }
}



function runCommand(command) {
	console.log(command);
	console.log(command);
	console.log(command);
	console.log(command);
	console.log(command);
	console.log(command);
    if (command.action === "toogleExecution") {
        playOrPause();
    } else if (command.action === "next") {
        alert("next");
    } else if (command.action === "previous") {
        alert("previous");
    }
}

function playOrPause(command) {
    var video = document.getElementsByTagName("video")[0];
    if (video) {
        if (video.paused) {
            video.play();
            sendResponse({
                paused: false,
                tabId: request.tabId
            });
        } else {
            video.pause();
            sendResponse({
                paused: true,
                tabId: request.tabId
            });
        }
    } else {
        sendResponse({
            error: 'No video object found'
        });
    }
    // if (player) {
    //     player.getPlayerState() == 1 ? player.pauseVideo() : player.playVideo()
    // } else {
    //     document.querySelectorAll('.html5-player-chrome > button:first-child')[0].click()
    // }
}