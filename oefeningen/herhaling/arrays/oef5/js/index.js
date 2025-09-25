// Oefening 5: Zoeken in een array
// Schrijf een programma dat controleert of een bepaald getal aanwezig is in een array en "Gevonden!" afdrukt als het aanwezig is, anders "Niet gevonden".

let elementen = [2,4,3,5,6,8,7,9];
let getal = parseInt(window.prompt("Geef een getal in!"));
let counter = 0;

for (let element of elementen){
    if (element == getal){
        alert("Gevonden!")
    } else {
        counter = counter + 1
    }
    }
if (counter=elementen.length){
    alert("niet gevonden")
}


