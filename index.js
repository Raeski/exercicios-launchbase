// //Criando as vaŕiaveis para calcuar o IMC
// const nome = 'Gustavo';
// const peso = 84;
// const altura = 1.85;

// // Calculando o imc
// const imc  = peso / (altura * altura);
// console.log(imc);
// //Conferindo se está acima do peso ou não
// if( imc >= 30){
//     console.log(`${nome} você está acima do peso`)
// } else {
//     console.log(`${nome} você não está acima do peso`)
// }




const nome = 'Gustavo'
const sexo = 'F'
const idade = 20;
const contribuicao = 3;
const soma = idade + contribuicao

// Conferir se está apto para se aposentar
if (sexo === 'M'){
    if(contribuicao >= 35 || soma >= 95 ){
        console.log(` ${nome} Você está apto para se aposentar`)
    } else {
        console.log("Você não está apto para se aposentar")
    }
}
if (sexo === 'F'){
    if(contribuicao >= 30 || soma >= 85 ){
        console.log(` ${nome} Você está apto para se aposentar`)
    } else {
        console.log("Você não está apto para se aposentar")
    }
}

