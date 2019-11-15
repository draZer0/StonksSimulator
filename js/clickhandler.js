let clicks = 0;

onClick = () => {
    clicks += 1;
    document.getElementById("js--clicks").innerHTML = clicks;

    if (clicks > 3) {
      console.log("test");
      document.getElementById("test").style.display = "block";
    } else if (clicks < 3) {
      console.log("nee");
    } else {

    }


}
