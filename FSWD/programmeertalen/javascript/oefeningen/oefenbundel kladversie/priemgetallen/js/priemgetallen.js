let naam = "Friedel";
console.log("Welkom op de priemgetallenpagina van" + naam);

let nummer = parseFloat(window.prompt("tot hoever wil je priemgetallen afdrukken?"));


for (let a = 3;a<=(nummer+2);a++) {

    for (let b = 2; b <= (a+1); b++) {
        if (nummer%b==0){
            console.log()
        }
        for (let c = 1;c<=b;c++) {
            let fraction=(nummer/c);
            if (nummer%c==0){
                // console.log(nummer)
                // console.log(a)
                // console.log(b)
                // console.log(c)
            } else {}
        }
    }
}