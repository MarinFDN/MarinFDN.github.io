
// mettre les divs en fonction du nombre de comp

function chum(Nom) {


    let chum = document.createElement("div");
    let blocnom = document.createElement("div");
    let blocbar = document.createElement("div");
    let bar = document.createElement("div");
    chum.appendChild(blocnom);
    chum.appendChild(blocbar);
    blocbar.appendChild(bar);

    if (Nom === undefined) {
        blocnom.innerText = "??? :";
    }   else {
        blocnom.innerText = Nom + " :";
    }

    chum.classList.add("chum");
    blocnom.classList.add("blocnom");
    blocbar.classList.add("blocbar");
    bar.classList.add("bar");
    bar.setAttribute("id",Nom);

    document.getElementById("main").appendChild(chum);
}

for (let i = 0; i < nbcomphum; i++) {
    chum (comphum[i])
}


// Constchoixbar => voir paravitesse.js
// vitesse : 0 instantanée 1 proportionnelle 2 pourcentage

// Constvitprop => voir paravitesse.js
// vitesse proportionnelle >0 : 1 = instantanée 

if (choixbar === 0) {

    var x = 0;
    var alpha = 0;
    var alphapas = 1 / vitprop;

    var barloop = setInterval(function () {

        x++;
        alpha += alphapas;
        
        for (let i = 0; i < nbcomphum; i++) {
            let idbar = document.getElementById(comphum[i])
            idbar.innerText = lvlcomphum[i] + "%";
            idbar.parentNode.style.gridTemplateColumns = lvlcomphum[i]+ "%";
            idbar.style.backgroundColor = "rgba(25, 255, 129, " + alpha + ")"; 
        }

        if (x === vitprop) {clearInterval(barloop)}
            
    }, 50);

}

if (choixbar === 1) {

    var x = 0;

    var x0 = lvlcomphum.map(x => x * 0);
    var x1 = lvlcomphum.map(x => x / vitprop);


    var barloop = setInterval(function () {

        x++;

        for (let i = 0; i < nbcomphum; i++) {
            x0[i] += x1[i];
            let idbar = document.getElementById(comphum[i])
            idbar.innerText = Math.round(x0[i]) + "%";
            idbar.parentNode.style.gridTemplateColumns = x0[i]+ "%";
        }

        if (x === vitprop) {clearInterval(barloop)}
            
    }, 50);

}

if (choixbar === 2) {

    var x = 0;

    var barloop = setInterval(function () {

        x++;

        for (let i = 0; i < nbcomphum; i++) {

            if (x <= lvlcomphum[i]) {

            let idbar = document.getElementById(comphum[i])
            idbar.innerText = x + "%";
            idbar.parentNode.style.gridTemplateColumns = x + "%";
            }
        }

        if (x === 100) {clearInterval(barloop)}
            
    }, 50);

}