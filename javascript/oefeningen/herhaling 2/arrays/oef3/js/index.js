// Oefening 3: Filter even getallen uit een array
// Schrijf een programma dat een array doorloopt en alle even getallen afdrukt.

let elementen = [46,15,7,55,19,18];
for (let element of elementen){
    if (element%2==0){
        console.log(element)
    }
}