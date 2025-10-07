let leeftijd = parseFloat(window.prompt("Geef uw leeftijd in"));

if(leeftijd < 12){
    alert(`U bent ${leeftijd} en u bent een kind`);
}else if(leeftijd >= 12 && leeftijd < 18 ){
    alert(`U bent ${leeftijd} en u bent een tiener`);
}else {
    alert(`U bent ${leeftijd} en u bent volwassen`);
}