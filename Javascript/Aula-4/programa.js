//Vetores

const vetor = ["A", 10, "01", 1.5, true];
const numeros = [1, 2, 3, 4, 5];
const frutas = ["maças", "laranjas", "peras", "uvas"]

console.log(frutas[2]); // chama o vetor
console.log(frutas[1]);

frutas[4] = "melancia" // adiciona elemento ao vetor
console.log(frutas)

frutas[1] = "limao" //substitui o vetor
console.log(frutas)

frutas.push("morango") // acrescenta um valor ao final, assim como foi com melancia, mas usanod push
console.log(frutas)

frutas.unshift("mangas")  //adiciona ao inicio o unshift
console.log(frutas)

const fruta_removida = frutas.pop() //remove ao final o elemento
console.log(frutas)
console.log(fruta_removida)

const fruta_removida2 = frutas.shift() //remove ao inicio o elemento
console.log(frutas)
console.log(fruta_removida2)

console.log(frutas.indexOf("peras")) //indexOf mostra em que posição o caractere está

console.log(Array.isArray(frutas))
console.log(Array.isArray(vetor))
console.log(Array.isArray("Olá mundo"))

 
