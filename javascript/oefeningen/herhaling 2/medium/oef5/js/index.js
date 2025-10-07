// Print de veelvouden van een gegeven getal: Vraag een getal aan de gebruiker en print de veelvouden van dat getal tot 100.
let a = 1;
let input = parseInt(window.prompt("Van welk getal wil je de veelvouden afdrukken tot max 100"))

for (a;a<=100;a++){
    if (input*a<100){
        console.log(`${input}*${a}=${input*a}`)
    }
}

