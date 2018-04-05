/*jslint devel: true */

function winInit() {
    stpetersburgimg = document.getElementById("fullSizeStPetersburg");
    cityimgDIV = document.getElementById("cityimgDIV");
    romeVideo = document.getElementById("romeVideo");
    guessingApp = document.getElementById("guessingApp");
    quizResponse = document.getElementById("quizResponse");
}
window.onload = winInit;

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

showGuessingApp = function(){
    guessingApp.style.display = "block";
    cityimgDIV.style.display = "none";
}

hideGuessingApp = function(){
    guessingApp.style.display = "none";
    cityimgDIV.style.display = "block";
}

guessBuilding = function(building){
    if(building === "World Trade Center"){
        quizResponse.innerHTML = "Du vet allerede noe om New York – hva med å lære mer?";
    }else{
        quizResponse.innerHTML = "Det var ikke rett – kanskje på tide med en New York-tur?";
    }
}