// Som van de eerste n getallen : Vraag een getal n aan de gebruiker en print alle getallne van 1 tot n...

let input = parseInt(window.prompt("Tot waar wil je de getallen optellen"));
let a = 1;
let som = 0;

for (a;a<=input;a++){
    som = som + a
}
console.log(`De som van alle getallen van 1 tot ${input} = ${som}`)
alert(`De som van alle getallen van 1 tot ${input} = ${som}`)
