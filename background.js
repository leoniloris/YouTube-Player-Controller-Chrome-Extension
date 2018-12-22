player = document.querySelectorAll('#watch7-player embed')[0]
if (player) {
    player.getPlayerState() == 1 ? player.pauseVideo() : player.playVideo()
} else { // if youtube.com/html5 is enabled
    document.querySelectorAll('.html5-player-chrome > button:first-child')[0].click()
}