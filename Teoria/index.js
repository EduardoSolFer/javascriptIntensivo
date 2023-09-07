const txt1 = document.getElementById("n1")
const txt2 = document.getElementById("n2")
const respuesta = document.getElementById("resultado")
const btnsumar = document.getElementById("sumar")
const btnrestar = document.getElementById("restar")
const btnmultiplicar = document.getElementById("multiplicar")
const btndividir = document.getElementById("dividir")


btnsumar.addEventListener('click', sumar)
btnrestar.addEventListener('click', restar)
btnmultiplicar.addEventListener('click', multiplicar)
btndividir.addEventListener('click', dividir)


function sumar() {
    const op1 =parseFloat(txt1.value)
    const op2 = parseFloat(txt2.value)
    let resultado = op1 + op2;
    respuesta.innerText = resultado
}


function restar() {
    const op1 =parseFloat(txt1.value)
    const op2 = parseFloat(txt2.value)
    let resultado = op1 - op2;
    respuesta.innerText = resultado
}


function multiplicar() {
    const op1 =parseFloat(txt1.value)
    const op2 = parseFloat(txt2.value)
    let resultado = op1 * op2;
    respuesta.innerText = resultado
}


function dividir() {
    const op1 =parseFloat(txt1.value)
    const op2 = parseFloat(txt2.value)
    let resultado = op1 / op2;
    respuesta.innerText = resultado
}

respuesta.style=("color:red")


// ******************************ARRAYS***************************************

const respuestaArray = document.getElementById("respArray")
const botonArray = document.getElementById("btnArray")

botonArray.addEventListener('click', mostrar)

let nombres = ["Eduardo", "Pedro", "Sofia"]

function mostrar() {
    respuestaArray.innerText = nombres=[nombres.length]
}
// --------------------------------------------------------------------------


//************************ASYNC************************************ */

async function obtenerData(){
    const response = await fetch("http://192.168.0.103:63193/Teoria/data.json")
    const json = await response.text();
    console.log(JSON.parse(json));
}
obtenerData();
// ---------------------------------------------------------------------------


//*****************************fetch .then**********************************/

async function obtenerData(){
    const response = await fetch("http://192.168.0.103:63193/Teoria/data.json")
    .then(response=>response.json())
    .then(json=> console.log(json))
    .catch(error=>console.log('Solicitud fallida',
    error))
}
obtenerData();