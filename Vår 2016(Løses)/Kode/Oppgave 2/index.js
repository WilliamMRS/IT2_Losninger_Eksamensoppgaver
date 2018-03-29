/*jslint devel: true */

function winInit() {
    const welcomeDIV = document.getElementById("welcomeDIV");
    const amerikanskSpråktest = document.getElementById("språktestDIV");

    showAmericanTest = function(){
        welcomeDIV.style.display = "none";
        amerikanskSpråktest.style.display = "block";
    }

}
window.onload = winInit;

// Constructor function for test objects
class Test{
       constructor (testQuestions, testCorrectAnswers) {
        this.questions = testQuestions;
        this.correctAnswers = testCorrectAnswers;

        this.answers = [];
        this.answerHistory = [];
        this.points = 0;
    }
}