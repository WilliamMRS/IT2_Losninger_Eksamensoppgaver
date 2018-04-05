/*jslint devel: true */

function winInit() {
    canvas = document.getElementById("mainCanvas");
    ctx = canvas.getContext("2d");

    //Load Images
    vindmolleStolpe = document.getElementById("vindmolleStolpe");
    vindmolleBlad = document.getElementById("vindmolleBlad");
    bjoerkblad = document.getElementById("bjoerkblad");
    bjoerkblad2 = document.getElementById("bjoerkblad1");
    standard_bjoerk = document.getElementById("standard_bjoerk");
    
    renderFrame(ctx);
}

window.onload = winInit;

renderFrame = function(ctx){
    drawbackground(ctx);
    drawImages(ctx);
}

drawImages = function(ctx){
    ctx.drawImage(bjoerkblad,500,10);
    ctx.drawImage(bjoerkblad1,750,10);
    ctx.drawImage(vindmolleStolpe,700,50);
    ctx.drawImage(vindmolleBlad,702,50);
}

spinObject = function(){

}

swayObject = function(){

}

drawbackground = function(ctx){
    //draw Grass and sky
    drawFilledSquare({
        ctx: ctx,
        x: 0,
        y: 600,
        height: 1000,
        width: 1000,
        color: "skyblue"
    })
    drawFilledCircle({
    ctx: ctx,
    x: 250,
    y: 2000,
    size: 1600,
    color: "Green",
    });

    ctx.drawImage(standard_bjoerk,500,0);

    //draw House
    drawFilledSquare({
        ctx: ctx,
        x: 100,
        y: 500,
        height: 250,
        width: 500,
        color: "rgb(153, 4, 21)",
    });
    drawFilledSquare({
        ctx: ctx,
        x: 150,
        y: 400,
        height: 80,
        width: 80,
        color: "#5496d8", 
    })
    drawFilledSquare({
        ctx: ctx,
        x: 350,
        y: 400,
        height: 80,
        width: 80,
        color: "#5496d8", 
    })
    drawFilledSquare({
        ctx: ctx,
        x: 480,
        y: 500,
        height: 160,
        width: 80,
        color: "rgb(102, 29, 29)",
    })
    drawFilledTriangle({
        ctx: ctx,
        x: 600,
        y: 250,
        height: -80,
        width: -250,
        color: "grey",
    });
    drawFilledTriangle({
        ctx: ctx,
        x: 100,
        y: 250,
        height: -80,
        width: 250,
        color: "grey",
    });
}