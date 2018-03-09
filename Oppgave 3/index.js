/*jslint devel: true */
function winInit() {
let validPasswords = ["password001", "password002", "password003", "password004", "password005", "password006", "password007", "password008", "password009", "password010"];
let wrongPassword = document.getElementById("wrongPassword");
let valgDIV = document.getElementById("valgDIV");
let loginDIV = document.getElementById("loginDIV");
let bekreftSvar = document.getElementById("bekreftSvar");
let bekreftKnapper = document.getElementById("bekreftKnapperDIV");
let takkDIV = document.getElementById("takkDIV");
let resultsDIV = document.getElementById("resultsDIV");
let resultsTable = document.getElementById("resultsTable");
let pendingParty = '';

let results = {
    ap: 0,
    frp: 0,
    hoyre: 0,
    krf: 0,
    miljopartiet: 0,
    piratpartiet: 0,
    raudt: 0,
    sp: 0,
    sv: 0,
    venstre: 0,
    total: 0
}

    drawHtmlTable = function(prosentArray){
        let data;
        let partiNavn = ["Ap", "FrP", "Høyre", "KrF", "Miljøpartiet", "Piratpartiet", "Rødt", "Senterpartiet", "SV", "Venstre"];
        let forrigeOppslutning = [23.0, 15.6, 28.2, 2.8, 3.8, 4.3, 3.7, 4.2, 5, 6.7];
        data = "<table><tr><th>Partinavn</th><th>Oppslutning 2017</th> <th>Oppslutning 2013</th></tr>";
        for(i = 0; i <= 9; i += 1){
        data += "<tr>"+
                    "<td>" + partiNavn[i] + "</td>"+
                    "<td>" + prosentArray[i] + "</td>"+
                    "<td>" + forrigeOppslutning[i] + "</td>"+
                    "<td>" + ((prosentArray[i] - forrigeOppslutning[i]).toFixed(1)) + "</td>"+
                "</tr>";
        }
        data += "</table>";
        return data;
    }

    showResults = function(){
        resultsDIV.style.display = "block";
        loginDIV.style.display = "none";

        let prosentArray = [];
        let partiResultatArray = [results.ap, results.frp, results.hoyre, results.krf, results.miljopartiet, results.piratpartiet, results.raudt, results.sp, results.sv, results.venstre];
        //Konverter resultat til prosent:
        for(i = 0; i <= 9; i += 1){
            prosentArray[i] = ((partiResultatArray[i]/results.total)*100).toFixed(1);
        }
        resultsTable.innerHTML = drawHtmlTable(prosentArray);
    }

    backToLogin = function(){
        takkDIV.style.display = "none";
        loginDIV.style.display = "block";
        wrongPassword.style.display = "none";
        resultsDIV.style.display = "none";
    }

    login = function(){
        let password = document.getElementById("passwordInput").value;
        if(checkPassword(password, validPasswords) === true){
            let userID = password.substr(8, 10); //Set User ID for Session
            //Do something with correct password
            hideElement(loginDIV);
            displayElement(valgDIV);
        }else{
            displayElement(wrongPassword);
        }
    }

    checkPassword = function(password, validPasswords){
        for(i = 0; i <= validPasswords.length; i += 1){
            console.log(i);
            if(validPasswords[i] === password){
                console.log(password);
                console.log("CORRECT");
                delete validPasswords[i];
                return true;
            }
            if(i >= 10 && validPasswords[i] !== password){
                return false;
            }
        }
    }

    hideConfirmDIV = function(){       //Executes from No button
        bekreftSvar.style.display = "none";
        bekreftKnapper.style.display = "none";
    }

    confirmParty = function(party){
        bekreftSvar.style.display = "block";
        bekreftSvar.innerHTML = "Ønsker du å stemme på " + party +  "?";
        bekreftKnapper.style.display = "block";
        pendingParty = party;
        console.log('pendingParty = ' + pendingParty);
    }

    deliverAnswer = function(){     //Executes from Yes button
        selectParty(pendingParty);
        bekreftSvar.style.display = "none";
        bekreftKnapper.style.display = "none";
        takkDIV.style.display = "block";
        valgDIV.style.display = "none";
    }

    selectParty = function(party){
        switch(party) {
                case "ap":
                results.ap += 1;
                break;

                case "frp":
                results.frp += 1;
                break;

                case "hoyre":
                results.høyre += 1;
                break;

                case "krf":
                results.krf += 1;
                break;

                case "miljopartiet":
                results.miljopartiet += 1;
                break;

                case "piratpartiet":
                results.piratpartiet += 1;
                break;

                case "raudt":
                results.raudt += 1;
                break;

                case "sp":
                results.sp += 1;
                break;

                case "sv":
                results.sv += 1;
                break;

                case "venstre":
                results.venstre += 1;
                break;
            default:
            console.log("none");
        }
        results.total += 1;
        console.log(results);
    }

    displayElement = function(a){
        a.style.display = "block";
    }
    
    hideElement = function(a){
        a.style.display = "none";
    }

    showDemoResults = function(){
        resultsDIV.style.display = "block";
        let prosentArray = [];
        let partiResultatArray = [5, 3, 6, 1, 2, 2, 1, 3, 2, 2];
        for(i = 0; i <= 9; i += 1){
            prosentArray[i] = ((partiResultatArray[i]/27)*100).toFixed(1);
        }
        resultsTable.innerHTML = drawHtmlTable(prosentArray);
    }
}
window.onload = winInit;