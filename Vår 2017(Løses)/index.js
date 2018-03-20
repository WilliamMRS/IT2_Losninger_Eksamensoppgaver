/*jslint devel: true */

function winInit() {
    const canvas = document.getElementById("mainCanvas");
    const ctx = canvas.getContext("2d");

    //Load Images
    const vindmolleStolpe = document.getElementById("vindmolleStolpe");
    const vindmolleBlad = document.getElementById("vindmolleBlad");
    const bjoerkblad = document.getElementById("bjoerkblad");
    const bjoerkblad2 = document.getElementById("bjoerkblad2");
    const standard_bjoerk = document.getElementById("standard_bjoerk");

    animationEngine(ctx);
}

window.onload = winInit;

animationEngine = function(ctx){
    ctx.drawImage(bjoerkblad,500,10);
    ctx.drawImage(bjoerkblad2,750,10);
    ctx.drawImage(standard_bjoerk,500,300);
    ctx.drawImage(vindmolleStolpe,0,0);
    ctx.drawImage(vindmolleBlad,2,0);
}

spinObject = function(){

}

swayObject = function(){

}
