// Operadores (+,-,*,/)

const x = 4;
const y = 5;

const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divisao = x / y

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);

//===========================
//modulo = % que significa o resto da divisão

console.log(3 % 2)
console.log(4 % 2)
console.log(5 % 2)
console.log(6 % 2)
console.log(7 % 2)
console.log(8 % 2)
console.log(9 % 2)
console.log(10 % 2)

//=========================
//incremento = atribui um valor + 1 (tem 3 formas de fazer)

//const z = 1;

//z = z + 1;

//console.log(z)

//================== primeira forma

//let z = 1;

//z = z + 1;

//console.log(z)

//================= segunda forma

//let z = 1;

//z += 1;

//console.log(z)

//================= terceira forma - A CORRETA

//let z = 1;

//z ++;

//console.log(z)

//Operadores de comparação 

const a = 1;
const b = 2;

console.log(a < b) // menor
console.log(a > b) // maior
console.log(a <= b) // menor ou igual
console.log(a >= b) // maior ou igual
console.log(a == b) // igual
console.log(a != b) // difeente

// Operadores lógicos

// && -> E
// || -> OU
// ! -> NÃO  (reverter o valor)

true && true; true
true && false; false
false && true; false
false && false; false

console.log(a < b && a > b)
console.log(a < b && a != b)
console.log(a == b && a > b)

console.log( a < b || 1 > 2); // no OU basta que uma seja verdadeira para que tudo seja verdadeiro
console.log(a == b || a != b);
console.log(a == b || a > b); //duas falsas vai ser falso

console.log(!true) // função é reverter o valor, então vai ser falso aqui
console.log(!(a == b)); // é falso mas como está revertando fica verdadeiro