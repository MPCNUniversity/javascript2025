var inputNumber = parseInt(window.prompt("Geef een getal in om de tafel te tonen!"))
var teller = parseInt(window.prompt("Geef hoever je de tafel wil laten lopen"))
for(let i =teller/teller;teller;i++)
for(inputNumber;i<=(inputNumber*i);i=i+inputNumber){
    console.log(`${i} x ${inputNumber} = ${i}`);
    teller = teller -1 ;
}

for(let i=inputNumber;i<=(inputNumber*teller);i=i+inputNumber) {
    console.log(`${teller} x ${inputNumber} = ${i}`);
    teller = teller + 1;
}