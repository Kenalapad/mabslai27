// Readmore Mission
function myMission() {
    var dotsVision  = document.getElementById("dotsVision");
    var moreTextMission = document.getElementById("moreVision");
    var btnTextMission = document.getElementById("myBtnMission");

    if (dotsVision.style.display === "none") {
        dotsVision.style.display = "inline";
        btnTextMission.innerHTML = "Read more";
        moreTextMission.style.display = "none";
    } else {
        dotsVision.style.display = "none";
        btnTextMission.innerHTML = "Read less";
        moreTextMission.style.display = "inline";
    }
}



// Readmore Vision
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";                                                                                           
    }
}