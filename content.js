chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender) {
    runCommand(message);
}

function runCommand(command) {
    if (command == "toogleExecution") {
        playOrPause();
    } else if (command == "next") {
        goToNextVideo();
    } else if (command == "previous") {
        goToPrevioustVideo();
    }
}

function playOrPause() {
    var video = document.getElementsByTagName("video")[0];
    console.log(video);
    if (video) {
        video.paused ? video.play() : video.pause();
    } else {
        console.log('couldn\'t find the player reference.')
    }
}

function goToNextVideo() {
    var nextButton = document.getElementsByClassName("ytp-next-button")[0];
    nextButton ? nextButton.click() : console.log('couldn\'t find the button reference.');
}

function goToPrevioustVideo() {
    var prevButton = document.getElementsByClassName("ytp-prev-button")[0];
    prevButton ? prevButton.click() : console.log('couldn\'t find the button reference.');
}