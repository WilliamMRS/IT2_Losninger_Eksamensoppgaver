/*jslint devel: true */

let poeng = 0;
let index = 0;

let userResponse = "";

function winInit() {
    const welcomeDIV = document.getElementById("welcomeDIV");
    const amerikanskSpråktest = document.getElementById("språktestapp");
    const responsetxt = document.getElementById("responsetxt");
    const poengTeller = document.getElementById("poengTeller");

    const oppgtxt = document.getElementById("oppgtxt");
    const svar1 = document.getElementById("svar1");
    const svar2 = document.getElementById("svar2");
    const svar3 = document.getElementById("svar3");
    const svar4 = document.getElementById("svar4");
    const svar5 = document.getElementById("svar4");

    const oversettingmp3 = document.getElementById("oversettingmp3");

    showAmericanTest = function(){
        welcomeDIV.style.display = "none";
        amerikanskSpråktest.style.display = "block";
        renderQuestion(americanTestQuestions);
    }
}
window.onload = winInit;

renderQuestion = function(questions){
    if(questions.length <= 1 + index){
        oppgtxt.innerHTML = questions[index].question;
        responsetxt.innerHTML = "";
        svar1.style.display = "none";
        svar2.style.display = "none";
        svar3.style.display = "none";
        svar4.style.display = "none";
        svar5.style.display = "none";
    }else{
        oppgtxt.innerHTML = questions[index].question;
        if(questions[index].answers.a !== undefined){
            svar1.innerHTML = questions[index].answers.a;
            svar5.style.display = "block";
        }else{
            svar1.style.display = "none";
        }
        if(questions[index].answers.b !== undefined){
            svar2.innerHTML = questions[index].answers.b;
            svar5.style.display = "block";
        }else{
            svar2.style.display = "none";
        }
        if(questions[index].answers.c !== undefined){
            svar3.innerHTML = questions[index].answers.c;
            svar5.style.display = "block";
        }else{
            svar3.style.display = "none";
        }
        if(questions[index].answers.d !== undefined){
            svar5.style.display = "block";
            svar4.innerHTML = questions[index].answers.d;
        }else{
            svar4.style.display = "none";
        }
        if(questions[index].answers.e !== undefined){
            svar5.style.display = "block";
            svar5.innerHTML = questions[index].answers.e;
        }else{
            svar5.style.display = "none";
        }
    }
}

nextQuestion = function(){
    mp3Button = document.getElementById("mp3Button");
    if(index === 2){
        mp3Button.style.display = "block";
    }else{
        mp3Button.style.display = "none";
    }
    if(index === 3){
        if(poeng < 0){
            userResponse = "Dette gikk ikke så bra, men det er håp for alle som vil lære et nytt språk!";
        }else if(poeng <= 2){
            userResponse = "Dette gikk bra, men kan gå endra bedre! Vi tilbyr språkkurs i New York!";
        }else{
            userResponse = "Dette språket kan du veldig godt!";
        }
        console.log("Poeng = " + poeng);
        americanTestQuestions[3].question = "Takk for at du tok testen!" + "<br>" + userResponse + "<br>" + "Dine poeng: " + poeng;
        poengTeller.innerHTML = "";
    } 
    renderQuestion(americanTestQuestions); 
}

checkAnswer = function(answer){
    if(americanTestQuestions[index].correctAnswer === answer || americanTestQuestions[index].correctAnswer2 === answer){
        index ++;
        responsetxt.innerHTML = "Rett svar!";
        poeng ++;
        poengTeller.innerHTML = "poeng: " + poeng;
        nextQuestion();
    }else{
        responsetxt.innerHTML = "Beklager, feil svar";
        index ++;
        poeng = poeng - 1;
        poengTeller.innerHTML = "poeng: " + poeng;
        nextQuestion();
    }
}

playMP3 = function(){
    oversettingmp3.play();
}

let americanTestQuestions = [
    {
      question: "Hva betyr ordet Where?",
      answers: {
        a: "Hvor",
        b: "Vi er",
        c: "Var",
        d: "Hvorfor"
      },
      correctAnswer: "a"
    },
    {
      question: "Hvilke(t) ord kan legges til her? " + "<br>" + "How are…",
      answers: {
        a: "you",
        b: "John doing?",
        c: "things",
        d: "the house",
        e: "the wife"
      },
      correctAnswer: "a",
      correctAnswer2: "c"
    },
    {
      question: "Listen to mp3",
      answers: {
        a: "Hei, mitt navn er Tom",
        b: "Jeg er Tom",
        c: "Kjenner du Tom?",
        d: "Når kommer Tom?"
      },
      correctAnswer: "c"
    },
    {
        question: "",
    }
  ];