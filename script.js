//codigo secão 1

const mathRound = document.getElementById('math-round')
const res1 = document.getElementById('res1')
const btn1 = document.getElementById('btn1')

function round() {
    if (mathRound.value.length == 0) {
        alert('Digite um numero decimal ex: 5,50')
    } else {
    let inteiro = Math.round(mathRound.value)
    res1.innerHTML = `<p>O numero arredondado é <strong>${inteiro}</strong></p>`
    }
}

btn1.addEventListener('click', round)

//codigo seção 2

const n1 = document.getElementById('math-pow')
const n2 = document.getElementById('math-pow2')
const res2 = document.getElementById('res2')

function pow() {
    if (n1.value.length == 0 || n2.value.length == 0) {
        alert('Digite um numero base e expoente !')
    } else {
    let potencia = Math.pow(n1.value,n2.value)
    res2.innerHTML = `A potencia de ${n1.value} elevado a ${n2.value} é <strong>${potencia.toFixed(2)}</strong>`
    }
}

btn2.addEventListener('click', pow)

//codigo seção 3

const raio = document.getElementById('raio')
const res3 = document.getElementById('res3')

function circulo() {
    if (raio.value.length == 0) {
        alert('Digite um numero!')
    } else {
    let circunferencia = 2 * Math.PI * (raio.value)
    let area = Math.PI * Math.pow(raio.value,2)

    res3.innerHTML = `A circunferencia de ${raio.value} é <strong>${circunferencia.toFixed(2)}</strong> <br> e a area de ${raio.value} é <strong>${area.toFixed(2)}</strong>`
    }
}

btn3.addEventListener('click', circulo)

// codigo seção 4

const cubo = document.getElementById('cubo')
const res4 = document.getElementById('res4')

function area() {
    if (cubo.value.length == 0) {
        alert('Digite um numero!')
    } else {
    let areaBase = Math.pow(cubo.value,2)
    let areaTotal = areaBase * 6
    let volume = Math.pow(cubo.value,3)

    res4.innerHTML = `A area base de ${cubo.value} é <strong>${areaBase.toFixed(2)}</strong> <br> A area total  de ${cubo.value} é <strong>${areaTotal.toFixed(2)}</strong> <br> O volume do cubo de ${cubo.value} é <strong>${volume.toFixed(2)}</strong>`
    }
}

btn4.addEventListener('click', area)

//codigo seção 5

const raiz = document.getElementById('raiz')
const res5 = document.getElementById('res5')

function raizQuadrada() {
    if (raiz.value.length == 0) {
        alert('Digite um numero!')
    } else {
    let num = Math.sqrt(raiz.value)

    res5.innerHTML = `A raiz quadrada de ${raiz.value} é <strong>${num.toFixed(2)}</strong>`
    }
}

btn5.addEventListener('click', raizQuadrada)