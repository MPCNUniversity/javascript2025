let beroep = parseInt(window.prompt("bent u 1 : zelfstandig, 2 : arbeider, 3 : bediende, 4 : ambtenaar"));

switch(beroep){
    case 1:
        alert("U werkt zeer veel");
        break;
    case 2:
        alert("U werkt veel");
        break;
    case 3:
        alert("U werkt");
        break;
    case 4:
        alert("Beuuuuh");
        break;
    default:
        alert("Geef een getal van 1 tot 4 als antwoord");
}