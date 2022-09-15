const prompt = require ('prompt-sync')();
const calculo = require('./soma');


let peso = Number (prompt('Digite seu peso: '))
let altura = Number(prompt('Digite sua altura : '))

calculo( peso, altura)







