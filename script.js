//codigo secão 1

const mathRound = document.getElementById('math-round')
const res1 = document.getElementById('res1')
const btn1 = document.getElementById('btn1')

function round() {
    let inteiro = Math.round(mathRound.value)
    res1.innerHTML = `<p>O numero arredondado é ${inteiro}</p>`
}

btn1.addEventListener('click', round)

//codigo seção 2

const n1 = document.getElementById('math-pow')
const n2 = document.getElementById('math-pow2')
const res2 = document.getElementById('res2')

function pow() {
    let potencia = Math.pow(n1.value,n2.value)
    res2.innerHTML = `A potencia de ${n1.value} elevado a ${n2.value} é ${potencia}`
}

btn2.addEventListener('click', pow)

//codigo seção 3

const raio = document.getElementById('raio')
const res3 = document.getElementById('res3')

function circulo() {
    let circunferencia = 2 * Math.PI * (raio.value)
    let area = Math.PI * Math.pow(raio.value,2)

    res3.innerHTML = `A circunferencia de ${raio.value} é ${circunferencia} <br> e a area de ${raio.value} é ${area}`
}

btn3.addEventListener('click', circulo)

// codigo seção 4

const cubo = document.getElementById('cubo')
const res4 = document.getElementById('res4')

function area() {
    let areaBase = Math.pow(cubo.value,2)
    let areaTotal = areaBase * 6
    let volume = Math.pow(cubo.value,3)

    res4.innerHTML = `A area base de ${cubo.value} é ${areaBase} <br> A area total  de ${cubo.value} é ${areaTotal} <br> O volume do cubo de ${cubo.value} é ${volume}`
}

btn4.addEventListener('click', area)

//codigo seção 5

const raiz = document.getElementById('raiz')
const res5 = document.getElementById('res5')

function raizQuadrada() {
    let num = Math.sqrt(raiz.value)

    res5.innerHTML = `A raiz quadrada de ${raiz.value} é ${num}`
}

btn5.addEventListener('click', raizQuadrada)