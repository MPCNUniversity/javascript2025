let cursisten=["Tom", "Tim", "Jan", "Natan", "Yamam"];
for (let i = 0;i<cursisten.length;i++){
    document.querySelector("#cursisten").innerHTML += `<li>${cursisten[i]}</li>`

    for (cursist of cursisten){
        document.querySelector("#cursisten").innerHTML += `<li>${cursisten[i]}</li>`
    }
}