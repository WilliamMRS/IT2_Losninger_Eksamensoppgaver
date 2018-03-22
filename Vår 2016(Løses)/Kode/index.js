/*jslint devel: true */

function winInit() {
    const stpetersburgimg = document.getElementById("fullSizeStPetersburg");
    const cityimgDIV = document.getElementById("cityimgDIV");
    const romeVideo = document.getElementById("romeVideo");

    fullSize = function(){
        stpetersburgimg.style.display = "block";
        cityimgDIV.style.display = "none";
    } 
    minimize = function(){
        stpetersburgimg.style.display = "none";
        cityimgDIV.style.display = "block";
    }
    playRomeVideo = function(){
        romeVideo.style.display = "block";
        romeVideo.play();
        cityimgDIV.style.display = "none";
    }
    hideRomeVideo = function(){
        romeVideo.style.display = "none";
        romeVideo.pause();
        cityimgDIV.style.display = "block";
    }
}
window.onload = winInit;