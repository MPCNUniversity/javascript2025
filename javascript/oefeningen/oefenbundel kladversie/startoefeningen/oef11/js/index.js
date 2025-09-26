// let i = 10;
// console.log(i % 3); //output:1

let e = parseFloat(window.prompt("Geef een Getal in!"));
let deler = parseFloat(window.prompt("Geef een deler in!"));
let counter = 0;
for(let i=1;i<=e;i++){
    if ( i % deler == 0){
        console.log(i);
        alert(i);
        counter=counter+1
    }
}
console.log(`${e} / ${deler} = ${counter}`)
alert(`${e} / ${deler} = ${counter + ((e%deler)/deler)}`)

//
// if (e % deler == 0) {
//     console.log(e)
// }
kmjk
