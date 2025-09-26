// vraag 2 prompts waar je elk 1 getal opvragt aan de gebruiker

var getal1 = window.prompt("Geef getal 1 in: ")
var getal2 = window.prompt("Geef getal 2 in: ")

var getal1 = parseInt(getal1);
var getal2 = parseInt(getal2);

// optellen van getal 1 en 2
console.log(getal1+getal2);

//aftrekken van getal 1 en 2
console.log(getal1-getal2);

//vermenigvuldigen van getal 1 en getal 2
console.log(getal1*getal2);

//delen van getal 1 en getal 2
console.log(getal1/getal2);

//rest van een deling
console.log(getal1%getal2);
//machtsverheffing
console.log(getal1**getal2);


//console.log("optelling : ", getal1 , " + ", getal2, " = ", getal1+getal2);

console.log(`de som van ${getal1} + ${getal2} = ${getal1+getal2}`);