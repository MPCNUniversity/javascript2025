// function palindroom true or false

function isPalindroom(woord){
    let omgekeerd="";
    for (let i = woord.lenght -1; i >= 0; i--){
        omgekeerd += woord[i];
    }
    return woord === omgekeerd;
}

let woord = prompt("Geef een woord in");


document.querySelector("#resultaat").innerHTML = isPalindroom(woord) ?`"${woord}" is een palindroom` : `"${woord}" is geen palindroom`;

//
// Neen. Ik function isPalindroom(woord) {
//     let omgekeerd = "";
//     for (let i = woord.length - 1; i >= 0; i--) {
//         omgekeerd += woord[i];
//     }
//     return woord === omgekeerd;
// }
//
// let woord = prompt("Geef een woord in:");
//
// document.querySelector("#resultaat").innerHTML =
//     isPalindroom(woord)
//         ? `"${woord}" is een palindroom`
//         : `"${woord}" is geen palindroom`;


// function isPalindroom(woord) {
//     let omgekeerd = "";
//     for (let i = woord.length - 1; i >= 0; i--) {
//         omgekeerd += woord.charAt(i); // charAt ipv []
//     }
//     return woord === omgekeerd;
// }