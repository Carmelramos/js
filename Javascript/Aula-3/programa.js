//String

const nome = "Pedro";
const sobrenome = "Silva";
const idade = 27;

//Concatenação - antiga
const apresentacao = "Meu nome é " + nome + " " + sobrenome + " e eu tenho " + idade + " anos. ";
idade + " anos.";

//Template de string - mais atual
const apresentacao2 = `Meu nome é ${nome} ${sobrenome} e eu tenho ${idade} anos`;

//console.log(apresentacao2);

const s = "Olá mundo";
//console.log(s.length) // O LENGTH conta o numero de caracteres

//Método é diferente de função. Método é uma palavra, a função tem uma palavra com parentese

//console.log(s.toUpperCase()) //aqui tem um metodo e uma função junto pq está fazendo uma ação

//console.log(s.toLocaleLowerCase());

// console.log(s.substring(0, 5)) // conta os caracteres começando de zero

console.log(s.split("n")) // divide a palavra a partir do especificado saida: Olá m, ndo