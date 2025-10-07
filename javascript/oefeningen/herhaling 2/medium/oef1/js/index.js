// Print machten van 2 : Gebruik een for-loop om de machten van 2 te printen, beginnend bij 1, totdat de macht groter is dan 1000

let a = 1;

for (a;a<=1000;a++){
    if (a**2<=1000){
        console.log(`${a} tot de tweede = ${a**2}`)
    }
}