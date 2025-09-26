// Print getallen tussen 1 en n die deelbaar zijn door 5: vraag een getal n aan de gebruiker en print alle getallen van 1 tot n die deelbaar zijn door 5.

let a = 1;
let input = parseInt(window.prompt("Geef een getal in om te delen door 5"));

for (a;a<=input;a++){
    if (a%5==0){
        console.log(a)
    }
}