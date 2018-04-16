/*jslint devel: true */

function winInit() {

    //Canvas handles
    canvas = document.getElementById("mainCanvas");
    ctx = canvas.getContext("2d");

    //Load Images
    vindmolleStolpe = document.getElementById("vindmolleStolpe");
    vindmolleBlad = document.getElementById("vindmolleBlad");
    bjoerkblad = document.getElementById("bjoerkblad");
    bjoerkblad2 = document.getElementById("bjoerkblad1");
    standard_bjoerk = document.getElementById("standard_bjoerk");

    info = document.getElementById('info');
    windSound = document.getElementById('windSound');
    metersPerSecond = document.getElementById('metersPerSecond');
    calculatorResponse = document.getElementById('calculatorResponse');

    bladeRotation = 0;
    windSpeed = 0;
    setInterval(refreshProgram, 1000/60);

    //kan gjøres som klasse også, noe som er mye bedre. + mer naturlig oscillation.
    blad1 = {
        x: 0,
        y: canvas.height/5*4,
        switch: false,
        draw: function(){ctx.drawImage(bjoerkblad,this.x,this.y)},
        oscillate: function(range){
            this.x += windSpeed * 3;
            if(windSpeed > 0 && this.switch === true){
                this.y += -range;
                if(this.y < canvas.height/5*4.1){
                    this.switch = false;
                }
            }else if(windSpeed > 0 && this.switch === false){
                this.y += range;
                if(this.y > canvas.height/5*4.5){
                    this.switch = true;
                }
            }
            if(this.x > canvas.width){
                this.x = -10;
            }
        }
    }
    blad2 = {
        x: 0,
        y: canvas.height/5*4,
        switch: true,
        draw: function(){ctx.drawImage(bjoerkblad1,this.x,this.y)},
        oscillate: function(range){
            this.x += windSpeed * 4;
            if(windSpeed > 0 && this.switch === true){
                this.y += -range;
                if(this.y < canvas.height/5*4){
                    this.switch = false;
                }
            }else if(windSpeed > 0 && this.switch === false){
                this.y += range;
                if(this.y > canvas.height/5*4.5){
                    this.switch = true;
                }
            }
            if(this.x > canvas.width){
                this.x = -10;
            }
        }
    }
    vindStille();
}

window.onload = winInit;

calculateWattProduction = function(definedMetersPerSecond){
    let a = metersPerSecond.value;
    let b = 0;
    let foundIt = false;

    if(definedMetersPerSecond > 0){a = definedMetersPerSecond};

        if(a > 32.7 && foundIt === false){
            b = 0;
            calculatorResponse.innerHTML = ('Orkan - ' + b);
            foundIt = true; 
        }else if(a > 28.5 && foundIt === false){
            b = 0;
            calculatorResponse.innerHTML = 'Sterk Storm - ' + b;
            foundIt = true; 
        }
        else if(a > 24.5 && foundIt === false){
            b = 0;
            calculatorResponse.innerHTML = 'Full Storm - ' + b;
            foundIt = true; 
        }
        else if(a > 20.8 && foundIt === false){
            b = 0;
            calculatorResponse.innerHTML = 'Liten Storm - ' + b;
            foundIt = true; 
        }
        else if(a > 17.2 && foundIt === false){
            b = 0;
            calculatorResponse.innerHTML = 'Sterk Kuling - ' + b;
            foundIt = true; 
        }
        else if(a >= 15.0 && foundIt === false){
            b = 0;
            calculatorResponse.innerHTML = 'Stiv Kuling - ' + b;
            foundIt = true; 
        }
        else if(a > 13.9 && foundIt === false){
            b = 500;
            calculatorResponse.innerHTML = 'Stiv Kuling - ' + b;
            foundIt = true; 
        }
        else if(a > 10.8 && foundIt === false){
            b = 400;
            calculatorResponse.innerHTML = 'Liten Kuling - ' + b;
            foundIt = true; 
        }
        else if(a > 8 && foundIt === false){
            b = 150;
            calculatorResponse.innerHTML = 'Frisk Bris - ' + b;
            foundIt = true; 
        }
        else if(a > 5.5 && foundIt === false){
            b = 60;
            calculatorResponse.innerHTML = 'Laber Bris - ' + b;
            foundIt = true; 
        }
        else if(a > 3.4 && foundIt === false){
            b = 10;
            calculatorResponse.innerHTML = 'Lett Bris - ' + b;
            foundIt = true; 
        }
        else if(a > 1.6 && foundIt === false){
            b = 2;
            calculatorResponse.innerHTML = 'Svak Vind - ' + b;
            foundIt = true; 
        }
        else if(a > 0.3 && foundIt === false){
            b = 0;
            calculatorResponse.innerHTML = 'Flau Vind - ' + b;
            foundIt = true; 
        }
        else if(a > 0 && foundIt === false){
            calculatorResponse.innerHTML = 'Stille - ' + 0;
            foundIt = true; 
        }
        else if(a < 0 && foundIt === false){
            calculatorResponse.innerHTML = 'Oppgi m/s i positive tall - takk :)';
            foundIt = true; 
        }
        calculatorResponse.innerHTML = calculatorResponse.innerHTML += ' Watt/Time'
        return b;
    }

    løvblåser = function(power, oscillation){

        switch(power){
            case 1:
            blad1.draw();
            blad2.draw();
            blad2.oscillate(windSpeed);
            blad1.oscillate(windSpeed);
            break;
            case 2:
            blad1.draw();
            blad2.draw();
            blad2.oscillate(windSpeed);
            blad1.oscillate(windSpeed);
            break;
        }

    }

    playSound = function(){
        windSound.play();
    }

    soundInterval = 0;

   vindStille = function(){
    windSound.pause();
    info.innerHTML = "Stille 0–0.2 m/s";
    windSpeed = 0;
    clearInterval(soundInterval);
   }

   lettBris = function(){
    clearInterval(soundInterval);
    windSound.pause();
    info.innerHTML = "Lett Bris 3.4–5.4 m/s";
    løvblåser(1);
    windSpeed = 0.2;
    orkan = false;
    windSound.play();
    soundInterval = setInterval(playSound, 30000);
   }

   stivKuling = function(){
    clearInterval(soundInterval);
    windSound.pause();
    info.innerHTML = "Stiv Kuling 13.9–17.1 m/s";
    løvblåser(2);
    windSpeed = 0.7;
    orkan = false;
    windSound.play();
    soundInterval = setInterval(playSound, 30000);
   }

refreshProgram = function(){
    updateVariables();
    renderFrame();
}

updateVariables = function(){
    bladeRotation += windSpeed;
}

renderFrame = function(){
        drawbackground();
        ctx.drawImage(standard_bjoerk,500,0);
        drawHouse();
        ctx.drawImage(vindmolleStolpe,700,50);
        drawRotatedImage(701, 50, vindmolleBlad, bladeRotation);
        if(windSpeed === 0.2){
            løvblåser(1);
        }else if(windSpeed === 0.7){
            løvblåser(2);
        }
}

drawRotatedImage = function(x, y, obj, angle){
    ctx.translate(x + obj.width/2, y + obj.height/2);
    ctx.rotate(angle * Math.PI/180);
    ctx.drawImage(obj, -obj.width/2, -obj.height/2);
    ctx.rotate(- angle * Math.PI/180);
    ctx.translate(-x - obj.width/2, - y - obj.height/2);
}

drawbackground = function(){ //draw Grass and sky
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
}

drawHouse = function(){ //draw House
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