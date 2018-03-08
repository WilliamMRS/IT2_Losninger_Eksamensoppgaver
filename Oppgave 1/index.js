/*jslint devel: true */

function winInit() {

}
window.onload = winInit;

showSPVideo = function(){
    let a = document.getElementById("SPVideoDIV");
    if(a.style.display === "none"){
        a.style.display = "block";
    }else{
        a.style.display = "none";
    }
}

runSlideShow = function(){
    let i = 1;
    let mdgDIV = document.getElementById(mdgSlideshowDIV);

    let a = document.getElementById("mdgImg1");
    let b = document.getElementById("mdgImg2");
    let c = document.getElementById("mdgImg3");

    a.style.display = "block";

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
    setInterval(changeImage, 2500);
}

showDIV = function(htmlObject){
	htmlObject.style.display = "block";
}

 hideDIV = function(htmlObject){
	htmlObject.style.display = "none";
}