function calculo (peso , altura){

let imc = 0
 
imc = (peso / (Math.pow(altura , 2)))
console.log(`Seu peso e ${peso} Sua altura e ${altura} Eo resultado do seu IMC =  ${imc}`)

}
module.exports = calculo


