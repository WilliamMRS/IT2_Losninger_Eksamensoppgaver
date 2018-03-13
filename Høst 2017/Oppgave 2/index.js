/*jslint devel: true */

function winInit() {
    readCanvas = document.getElementById("myCanvas");
    ctx = readCanvas.getContext("2d");
}
window.onload = winInit;

function drawText(options){
	"use strict";
	options.ctx.font = options.font;//18px Arial
	options.ctx.fillStyle = options.fillstyle; //"black"
	options.ctx.textAlign = "middle";
	options.ctx.fillText(options.text, options.x, options.y);
}

function drawFilledCircle(options) {
	options.ctx.beginPath();
	options.ctx.strokeStyle = options.color;
	options.ctx.fillStyle = options.color;
	options.ctx.moveTo(options.x, options.y);
	options.ctx.arc(options.x, options.y, options.size, options.startPoint, options.area * Math.PI);
	options.ctx.fill();
}

calculateResult = function(){
    ctx.clearRect(0, 0, readCanvas.width, readCanvas.height);

    Rødt = parseFloat(document.getElementById("Rødt").value);
    SV = parseFloat(document.getElementById("SV").value);
    Ap = parseFloat(document.getElementById("Ap").value);
    SP = parseFloat(document.getElementById("SP").value);
    MDG = parseFloat(document.getElementById("MDG").value);
    KrF = parseFloat(document.getElementById("KrF").value);
    V = parseFloat(document.getElementById("V").value);
    H = parseFloat(document.getElementById("H").value);
    FrP = parseFloat(document.getElementById("FrP").value);
    PIR = parseFloat(document.getElementById("PIR").value);

    let borgerlige = H + FrP + KrF + V;
    let rødgrønne = Ap + SV + SP;

    let sum = borgerlige + rødgrønne;

    borgerligeHalvsirkel = (2/sum) * borgerlige;
    rødgrønneHalvsirkel = (2/sum) * rødgrønne;

    rødgrønneProsent = ((100/sum) * rødgrønne).toFixed(2);
    borgerligeProsent = ((100/sum) * borgerlige).toFixed(2);

    drawText({
        ctx: ctx,
        text: "Borgerlige",
        x: 10,
        y: 20,
        fillstyle: "Blue",
        font: "18px Arial"
    });
    drawText({
        ctx: ctx,
        text: "Rød-Grønne",
        x: 390,
        y: 20,
        fillstyle: "Red",
        font: "18px Arial"
    });

    drawFilledCircle({
		ctx: ctx,
        x: 250,
        y: 250,
        size: 200,
        color: "Blue",
        area: borgerligeHalvsirkel,
        startPoint: 0,
    });

    drawFilledCircle({
		ctx: ctx,
        x: 250,
        y: 250,
        size: 200,
        color: "Red",
        area: 2,
        startPoint: borgerligeHalvsirkel * Math.PI,
    });

    drawText({
        ctx: ctx,
        text: (rødgrønneProsent + "%"),
        x: 420,
        y: 50,
        fillstyle: "Red",
        font: "18px Arial"
    });
    drawText({
        ctx: ctx,
        text: (borgerligeProsent + "%"),
        x: 20,
        y: 50,
        fillstyle: "Blue",
        font: "18px Arial"
    });
    if(rødgrønneProsent >= borgerligeProsent){
        drawText({
            ctx: ctx,
            text: ("Størst ==>"),
            x: 200,
            y: 25,
            fillstyle: "Red",
            font: "18px Arial"
        });
        drawText({
            ctx: ctx,
            text: ("Større med " + (rødgrønneProsent - borgerligeProsent).toFixed(1) + "%"),
            x: 380,
            y: 75,
            fillstyle: "Black",
            font: "12px Arial"
        });
    }else{
        drawText({
            ctx: ctx,
            text: ("<== Størst"),
            x: 200,
            y: 25,
            fillstyle: "Blue",
            font: "18px Arial"
        });
        drawText({
            ctx: ctx,
            text: ("Større med " + (borgerligeProsent - rødgrønneProsent).toFixed(1) + "%"),
            x: 20,
            y: 75,
            fillstyle: "Black",
            font: "12px Arial"
        });
    }
}


inputTestData = function(){
    document.getElementById("Rødt").value = 3.7;
    document.getElementById("SV").value = 5.0;
    document.getElementById("Ap").value = 23.0;
    document.getElementById("SP").value = 4.2;
    document.getElementById("MDG").value = 3.8;
    document.getElementById("KrF").value = 2.8;
    document.getElementById("V").value = 6.7;
    document.getElementById("H").value = 28.2;
    document.getElementById("FrP").value = 15.6;
    document.getElementById("PIR").value = 4.3;
}