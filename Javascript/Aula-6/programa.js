//Estruturas Consicionais

const x = 10;
const y = 10;

if (x < y) {
    console.log("X é menor que Y");
} else if (x > y) {
    console.log("X é maior que Y")
} else if (x == y){
    console.log("X é igual a Y")
}


//verifica a partir da constante, e declara a partir dele
const cor = "verde";

switch(cor){
    case "vermelho":
    console.log("a cor é vermelho");
    break;

    case "verde":
    console.log("a cor é verde");
    break;

    case "azul":
    console.log("a cor é azul")
    break;

    default:
    console.log("A cor não é vermelho, nem verde, nem azul");
    break;  //interrompe 
} 

const sexo = "f";

switch (sexo) {
    case "M":
    case "m":
        console.log("Masculino");
        break;

    case "F":
    case "f":
        console.log("Feminino");
        break;
    
    default:
        console.log("inválido");
}

let numero;

if (cor == "vermelho"){
    numero = 10;
} else {
    numero = 20;
}

let numero2 = cor == "vermelho" ? 10 : 20;  //forma melhor de escrever o de cima

console.log(numero)

