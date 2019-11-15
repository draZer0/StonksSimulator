let clicks = 0;


let button = document.getElementById("button");

onClick = () => {
    clicks += 1;
    document.getElementById("js--clicks").innerHTML = clicks;

    if (clicks > 3) {
      console.log("above 3");
      document.getElementById("item1").style.opacity = "1";
    };

    if (clicks > 6) {
      console.log("above 6");
      document.getElementById("item2").style.opacity = "1";
    };


}
