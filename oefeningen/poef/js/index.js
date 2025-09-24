/*
Je vraagt een getal aan de gebruiker.(jaartal)
Je vraagt ook een tweede getal van de gebruiker. (jaartal)

Je weet niet op voorhand welk getal het geboortejaar is en welk het huidige jaar is.
Je zal er steeds voor zorgen dat het grootste getal van de twee het eerste getal zal zijn.
Je laat de pc uitrekenen hoeveel jaar je bent en doet de onderstaande controle:
Om deel te nemen aan de nationale loterij moet je 18 jaar oud zijn.
 */

var geboorteJaar = window.prompt("Wat is je geboortejaar?");
var huidigeJaar = window.prompt("Welk jaar is het nu?");

var eersteJaar = parseInt(geboorteJaar)
var tweedeJaar = parseInt(huidigeJaar)

if(eersteJaar < tweedeJaar){
    console.log(`u bent ${tweedeJaar-eersteJaar} oud`)
}else{
    console.log(`u bent ${eersteJaar-tweedeJaar}`)
}
/*
var leeftijd = parseInt(huidigeJaar)-parseInt(geboorteJaar)

if(leeftijd >= 18){
    console.log("ok u mag deelnemen!")
}else{
    console.log("U bent te jong!")
}

if (leeftijd >= 18){
    console.log(`u bent ${leeftijd} jaar en mag meedoen`)

 */