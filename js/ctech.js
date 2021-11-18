
// mettre les divs en fonction du nombre de comp


function ctech(numero) {

    let bloctech = document.createElement("div");
    let blocnom = document.createElement("div");
    let bloccanvas = document.createElement("canvas");
    let blocpourcent = document.createElement("div");
    bloctech.appendChild(blocnom);
    bloctech.appendChild(bloccanvas);
    bloctech.appendChild(blocpourcent);

    let id = "ctech" + numero

    bloctech.classList.add("box");
    bloccanvas.classList.add("met");
    bloccanvas.setAttribute("id", id);
    bloccanvas.setAttribute("height", "100");
    bloccanvas.setAttribute("width", "100");

    document.getElementById("main").appendChild(bloctech);
}


for (let i = 1; i <= nbcomptech; i++) {
    ctech (i)
}



// tracer les cercles et les fonds


const bardepart = -0.5 * Math.PI;


for (let i = 1; i <= nbcomptech; i++) {

    let id = "ctech" + i;
    
    let fon = document.getElementById(id).getContext("2d");
    fon.beginPath();
    fon.arc(50, 50, 47, bardepart, 1.5 * Math.PI);
    fon.lineWidth = '6';
    fon.strokeStyle = '#11581E';
    fon.stroke();

    let idimg = "url('js/ctech" + i + ".png')";

    document.getElementById(id).style.backgroundImage = idimg;
    document.getElementById(id).previousElementSibling.innerHTML = comptech[i - 1];

    var idnull = id

    if (comptech[i - 1] === undefined) {
        document.getElementById(idnull).previousElementSibling.innerHTML = "???";
        document.getElementById(idnull).style.backgroundImage = "url('js/ctech0.png')";
    }

}

// const choixbar => voir paravitesse.js
// vitesse : 0 instantanée 1 proportionnelle 2 pourcentage

// const vitprop => voir paravitesse.js
// vitesse proportionnelle >0 : 1 = instantanée 


// mettre les barres de progression

if (choixbar === 0) {

    x3 = 0;

     var barloop = setInterval(function () {
    
        x3++;
        x6 = x3 / 20;
    
        for (let i = 1; i <= nbcomptech; i++) {
            let id = "ctech" + i;
            let pourcent = 0.02 * Math.PI * lvlcomptech[i - 1] + bardepart;
            let bar = document.getElementById(id).getContext("2d");
            bar.beginPath();    
            bar.arc(50, 50, 47, bardepart, pourcent);
            bar.lineWidth = '6';
            bar.strokeStyle = '#19FF81';    
            bar.globalAlpha = x6 ;
            bar.stroke();
            document.getElementById(id).nextElementSibling.innerHTML = lvlcomptech[i - 1] + "%";
        }
        
        if (x3 === 20) {clearInterval(barloop)}
            
    }, 100);


}

if (choixbar === 1) {

    var x = bardepart;
    var x1 = [x,x,x,x,x,x,x,x];
    var x2 = [x,x,x,x,x,x,x,x];
    var x3 = 0;
    var x4 = lvlcomptech.map(x => x / vitprop);
    var x5 = [0,0,0,0,0,0,0,0];

    var barloop = setInterval(function () {
    
        x3++;
    
        for (let i = 1; i <= nbcomptech; i++) {
            x1 [i-1] = x2 [i-1];
            x2 [i-1] += 0.02 * Math.PI * lvlcomptech [i-1] / vitprop;
            x5 [i-1] += x4 [i-1];
    
            let id = "ctech" + i;
            let bar = document.getElementById(id).getContext("2d");
            bar.beginPath();    
            bar.arc(50, 50, 47, x1 [i-1], x2 [i-1]);
            bar.lineWidth = '6';
            bar.strokeStyle = '#19FF81';
            bar.stroke();   
            document.getElementById(id).nextElementSibling.innerHTML = Math.round(x5[i - 1]) + "%";
        }
        
        if (x3 === vitprop) {clearInterval(barloop)}
            
    }, 50);

}

if (choixbar === 2) {
  
    var x1 = bardepart;
    var x2 = bardepart;
    var x3 = 0;

    var barloop = setInterval(function () {
        
        x1 = x2;
        x2 += 0.02 * Math.PI;
        x3++;

        for (let i = 1; i <= nbcomptech; i++) {
            
            if (x3 <= lvlcomptech[i-1]) {
                let id = "ctech" + i;        
                let bar = document.getElementById(id).getContext("2d");
                bar.beginPath();    
                bar.arc(50, 50, 47, x1, x2);
                bar.lineWidth = '6';
                bar.strokeStyle = '#19FF81';
                bar.stroke();
                document.getElementById(id).nextElementSibling.innerHTML = x3 + "%";
            }
        }
        
        if (x3 === 100) {clearInterval(barloop)}
        

    }, 50);

}









