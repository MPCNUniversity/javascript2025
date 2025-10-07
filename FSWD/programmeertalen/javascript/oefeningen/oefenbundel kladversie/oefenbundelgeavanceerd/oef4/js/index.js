// Tel de cijfers in een getal : Vraag een getal aan de gebruiker en gebruik een for-loop om het aantal cijfers in dat getal te tellen.

let cijfers = window.prompt("Geef een getal in!");
let counter = 0;
let overflow =parseInt(cijfers)

alert (cijfers.length)

for (let i = 1; i<=overflow;i++){
    if (overflow%10 ) {
    counter = counter + 1;
    } else {
        alert(`In het getal ${cijfers} zitten ${counter} getallen`)
    }
}




