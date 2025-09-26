// // let som = 0
// // for(let i=1;i<=10;i=i++){
// //     console.log(i);
// // }
// //
// // for(let i=1;i<=10;i++){
// //     alert(i);
// // }
//
// for(let teller=1;teller<=5;teller = teller +1 ) {
//     switch(teller){
//         case 1:
//             console.log("*");
//             break;
//         case 2:
//             console.log("**");
//             break;
//
//         case 3:
//             console.log("***");
//             break;
//         case 4:
//             console.log("****");
//             break;
//
//         case 5:
//             console.log("*****");
//             break;
//         default:alert()
//     }}



var sterretje = "*"
let aantalLijnen = parseInt(window.prompt("Hoeveel lijnen sterretjes wens je te zien?"))
for(let i=1;i<=aantalLijnen;i=i+1){
    console.log(sterretje);
    sterretje = sterretje + "*"
}



