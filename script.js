//codigo secão 1

const mathRound = document.getElementById('math-round')
const res1 = document.getElementById('res1')
const btn1 = document.getElementById('btn1')

function round () {
    let inteiro = Math.round(mathRound.value)
    res1.innerHTML = `<p>O numero arredondado é ${inteiro}</p>`
}

btn1.addEventListener('click', round)

//codigo seção 2

const n1 = document.getElementById('math-pow')
const n2 = document.getElementById('math-pow2')
const res2 = document.getElementById('res2')

function pow(){
    let potencia = Math.pow(n1.value,n2.value)
    res2.innerHTML = `A potencia de ${n1.value} elevado a ${n2.value} é ${potencia}`
}

btn2.addEventListener('click', pow)


