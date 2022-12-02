function Escribir(cuanto,que,...c) {
    if (cuanto <10) {
        que.children[0].textContent = "0" + cuanto;
    } else {
        que.children[0].textContent = cuanto;
    }
    c.forEach(function(n) {
        let escribir
        if (n<10) {
            escribir = "00" + n;
        } else if (n<100) {
            escribir = "0" + n;
        } else {
            escribir = n;
        }
        que.children[0].textContent = cuanto + "." + escribir;
    })
}
function cambioHoras() {
    let grados = 0;
    let altura = 0;
    Escribir(horaValor,hora)
        const dupli = hora.appendChild(hora.cloneNode(true));
        dupli.children[0].textContent = "60"
        dupli.style.position = "absolute"
        const chauHora = setInterval(()=>{   
            dupli.style.transform = `rotateX(${grados}deg) translateY(-${altura}px) translateX(-${altura/2.5}px) rotateY(+${grados/3}deg)`
            altura+=2.8;
            grados+=0.4;
            if (grados > 140) {
                hora.removeChild(dupli)
                clearInterval(chauHora)
                grados = 0;
                altura = 0;
            }
           
        },1)
}
function cambioMinutos() {
    let grados = 0;
    let altura = 0;
    Escribir(minutosValor,minuto)
        const dupli = minuto.appendChild(minuto.cloneNode(true));
        dupli.children[0].textContent = "60"
        dupli.style.position = "absolute"
        const chauMinuto = setInterval(()=>{   
            dupli.style.transform = `rotateX(${grados}deg) translateY(-${altura}px) translateX(+${altura/2.5}px) rotateY(-${grados/3}deg)`
            altura+=2.8;
            grados+=0.4;
            if (grados > 140) {
                minuto.removeChild(dupli)
                clearInterval(chauMinuto)
                grados = 0;
                altura = 0;
            }
           
        },1)
}
const reloj = document.getElementsByClassName("horas__minutos")[0];
const hora = document.getElementsByClassName("hora")[0];
const minuto = document.getElementsByClassName("minuto")[0];
const segundos = document.getElementsByClassName("segundos")[0];
let minutosValor;
let horaValor;
let segundosValor;
let milisegundos;
let unavez = false;
const date = new Date()
segundosValor = date.getSeconds();
minutosValor = date.getMinutes();
horaValor = date.getHours();
milisegundos = date.getMilliseconds();
Escribir(minutosValor,minuto)
Escribir(horaValor,hora)
Escribir(segundosValor,segundos,milisegundos)
setInterval(upadteTime,10)
function upadteTime() {
    const date = new Date()
    segundosValor = date.getSeconds();
    minutosValor = date.getMinutes();
    horaValor = date.getHours();
    milisegundos = date.getMilliseconds();
}
setInterval(()=>{
    Escribir(minutosValor,minuto)
    Escribir(horaValor,hora)
    Escribir(segundosValor,segundos,milisegundos)
    if (segundosValor == 59) {
        if (unavez == false) {
            unavez = true;
            setTimeout(()=>{
                cambioMinutos()
            },1000) 
            if (minutosValor == 59) {
                setTimeout(()=>{
                    cambioHoras()
                },1000)
            }
        }
    }
    if (segundosValor == 5) {
        unavez = false;
    }
},10)
