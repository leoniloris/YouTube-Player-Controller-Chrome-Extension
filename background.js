if (window == top) {
    window.addEventListener('keyup', doKeyPress, false); //add the keyboard handler
}

trigger_key = 71; // g key
function doKeyPress(e) {
	console.log('background apertou butao')
    if (e.shiftKey && e.keyCode == trigger_key) { // if e.shiftKey is not provided then script will run at all instances of typing "G"
        alert('Hi!')
    }
}
// player = document.querySelectorAll('#watch7-player embed')[0]
// if (player) {
//     player.getPlayerState() == 1 ? player.pauseVideo() : player.playVideo()
// } else {
//     document.querySelectorAll('.html5-player-chrome > button:first-child')[0].click()
// }