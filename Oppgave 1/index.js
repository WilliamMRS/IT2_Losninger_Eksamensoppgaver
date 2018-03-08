/*jslint devel: true */

function winInit() {

}
window.onload = winInit;

showSPVideo = function(){
    let a = document.getElementById("SPVideoDIV");
    let b = document.getElementById("SPVideo");
    if(a.style.display === "none"){
        a.style.display = "block";
        b.play();
    }else{
        a.style.display = "none";
        b.pause();
    }
}

runSlideShow = function(){
    let i = 1;
    let mdgDIV = document.getElementById(mdgSlideshowDIV);

    let a = document.getElementById("mdgImg1");
    let b = document.getElementById("mdgImg2");
    let c = document.getElementById("mdgImg3");

    let aa = document.getElementById("mdgSound1");

    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
    playMp3 = function(){
        aa.play();
    }

    playMp3();

    function changeImage(){
        if(i >= 3){
            i = 0;
        }
        switch(i) {
                case 0:
                a.style.display = "block";
                b.style.display = "none";
                c.style.display = "none";
                break;

                case 1:
                a.style.display = "none";
                b.style.display = "block";
                c.style.display = "none";
                break;

                case 2:
                a.style.display = "none";
                b.style.display = "none";
                c.style.display = "block";
                break;
            default:
            console.log("none");
        }
        i = i + 1;
    }
        let slideShow = setInterval(changeImage, 2500);
        let loopMusic = setInterval(playMp3, 500);
}

showDIV = function(htmlObject){
	htmlObject.style.display = "block";
}

 hideDIV = function(htmlObject){
	htmlObject.style.display = "none";
}