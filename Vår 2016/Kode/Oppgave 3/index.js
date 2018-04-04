/*jslint devel: true */

//bygget applikasjonen komponent-basert

function winInit() {
    årstidSelect = document.getElementById("årstidSelect");

    bestillingsDetaljer = document.getElementById("bestillingsDetaljer");

    bestillingsDiv = document.getElementById("bestillingsDiv");

    dobbeltromPris = document.getElementById("dobbeltromPris");
    enkeltromPris = document.getElementById("enkeltromPris");

    hotellSelect = document.getElementById("hotellSelect");
    hotellTekst = document.getElementById("hotellTekst");
    d = document.getElementById("destinasjonSelect");

    enkeltRom = document.getElementById("enkeltRom");
    dobbeltRom = document.getElementById("dobbeltRom");

    kulturpassCheck = document.getElementById("kulturpassCheck");

    console.log(Reisemål["New York"]);
    hotellTekst.innerHTML = ("");
    hotellSelect.style.display = "none";

    setInterval(refreshComponents, 200);
}

window.onload = winInit;

refreshComponents = function(){
    renderBestillingsDetaljer();
    renderRomPris();
}

renderRomPris = function(){
    try{
    let valgtReisemål = d.options[d.selectedIndex].value;
    let hotellnavn = hotellSelect.options[hotellSelect.selectedIndex].value;
    let sesong = årstidSelect.options[årstidSelect.selectedIndex].value

    dobbeltromPris.innerHTML = Reisemål[valgtReisemål]["Hotell"][hotellnavn]["Dobbeltrom"][sesong];
    enkeltromPris.innerHTML = Reisemål[valgtReisemål]["Hotell"][hotellnavn]["Enkeltrom"][sesong];
    }
    catch(err) {
        //do nothing
    }
}

renderBestillingsDetaljer = function(){
    let sum = 0;
    let destinasjon = ('<h4 style = "color: darkblue;">' + d.options[d.selectedIndex].value + '</h4>');
    let handlekurv = ("");
        if(enkeltRom.value > 0){
            handlekurv = handlekurv + ('<p>' + enkeltRom.value + ' Enkeltrom: ' + (enkeltRom.value) * enkeltromPris.innerHTML + 'kr</p>');
            sum = sum + ((enkeltRom.value) * enkeltromPris.innerHTML);
        }
        if(dobbeltRom.value > 0){
            handlekurv = handlekurv + ('<p>' + dobbeltRom.value + ' Dobbeltrom: ' + (dobbeltRom.value) * dobbeltromPris.innerHTML + 'kr</p>');
            sum = sum + ((dobbeltRom.value) * dobbeltromPris.innerHTML);
        }
        if(kulturpassCheck.checked === true){
            handlekurv = handlekurv + ('<p>Kulturpass: 700kr</p>');
            sum = sum + 700;
        }

        handlekurv = handlekurv + ("<p style = 'color: green;'>Sum: " + sum + "kr</p>");

    bestillingsDetaljer.innerHTML = (destinasjon + handlekurv);
}

renderHotellSelection = function(){
    hotellSelect.style.display = "block";
    switch(d.options[d.selectedIndex].value){

        case "New York":
        console.log(d.options[d.selectedIndex].value +  " selected.");
        hotellSelect.innerHTML = (
        '<option value="Aurora">Aurora</option>' +
        '<option value="Downtown">Downtown</option>' +
        '<option value="City Hall">City Hall</option>' +
        '<option value="Wilmont">Wilmont</option>' +
        '<option value="Chelsea Inn">Chelsea Inn</option>'
        );
        hotellTekst.innerHTML = ("Velg hotell til " + d.options[d.selectedIndex].value);
        break;

        case "St. Petersburg":
        console.log(d.options[d.selectedIndex].value +  " selected.");
        hotellSelect.innerHTML = ("");
        hotellTekst.innerHTML = ("Velg hotell til " + d.options[d.selectedIndex].value);
        break;

        case "Amsterdam":
        console.log(d.options[d.selectedIndex].value +  " selected.");
        hotellSelect.innerHTML = ("");
        hotellTekst.innerHTML = ("Velg hotell til " + d.options[d.selectedIndex].value);
        break;

        case "Roma":
        console.log(d.options[d.selectedIndex].value +  " selected.");
        hotellSelect.innerHTML = ("");
        hotellTekst.innerHTML = ("Velg hotell til " + d.options[d.selectedIndex].value);
        break;

        default:
        hotellTekst.innerHTML = ("");
        hotellSelect.style.display = "none";
        break;
    }
    refreshComponents();
}

const Reisemål = {
    "New York":{
            "kulturpass":{
                "pris": 700,
            },
            "Hotell":{
                "Aurora":{
                    "Enkeltrom":{
                        "Sommer": 890,
                        "Vinter": 990
                    },
                    "Dobbeltrom":{
                        "Sommer": 1080,
                        "Vinter": 1380
                    }
                },
                "Downtown":{
                    "Enkeltrom":{
                        "Sommer": 990,
                        "Vinter": 1050
                    },
                    "Dobbeltrom":{
                        "Sommer": 1320,
                        "Vinter": 1500
                    }
                },
                "City Hall":{
                    "Enkeltrom":{
                        "Sommer": 750,
                        "Vinter": 830
                    },
                    "Dobbeltrom":{
                        "Sommer": 900,
                        "Vinter": 1060
                    }
                },
                "Wilmont":{
                    "Enkeltrom":{
                        "Sommer": 990,
                        "Vinter": 1080
                    },
                    "Dobbeltrom":{
                        "Sommer": 1320,
                        "Vinter": 1760
                    }
                },
                "Chelsea Inn":{
                    "Enkeltrom":{
                        "Sommer": 750,
                        "Vinter": 860
                    },
                    "Dobbeltrom":{
                        "Sommer": 900,
                        "Vinter": 1120
                    }
                }
            },
        },
    "St. Petersburg":{},
    "Amsterdam":{},
    "Roma":{}
}