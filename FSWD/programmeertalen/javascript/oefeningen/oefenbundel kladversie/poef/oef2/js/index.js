/*
Je vraagt het geboortejaar van de gebruiker (bijv. 1973).
Je vraagt ook het huidige jaar (bijvoorbeeld 2025)
Je laat de pc uitrekenen hoeveel jaar je bent en doet de onderstaande controle:
Om deel te nemen aan de nationale loterij moet je 18 jaar oud zijn.
 */

var geboorteJaar = window.prompt("Wat is je geboortejaar?");
var huidigeJaar = window.prompt("Welk jaar is het nu?");
var leeftijd = parseInt(huidigeJaar)-parseInt(geboorteJaar)

if(leeftijd >= 18){
    console.log("ok u mag deelnemen!")
}else{
    console.log("U bent te jong!")
}

if (leeftijd >= 18){
    console.log(`u bent ${leeftijd} jaar en mag meedoen`)
}


