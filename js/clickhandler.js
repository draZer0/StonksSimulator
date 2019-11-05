let clicks = 0;
var audio = new Audio('js/audio/coin.mp3');


onClick = () => {
    clicks += 1;
    audio.play();
    document.getElementById("clicks").innerHTML = clicks;
};
