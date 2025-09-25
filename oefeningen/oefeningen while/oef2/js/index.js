let input = parseFloat(window.prompt("Tot welk getal wil je de oneven getallen afdrukken"))
for (let a =1;a<=input;a++){
    if (a%2==0) {
    } else {
        console.log(a)
    }
}

// while
let a = 1;
while (a<=input){
    if (a%2!=0){
        console.log(a)
    }
    a++;
}