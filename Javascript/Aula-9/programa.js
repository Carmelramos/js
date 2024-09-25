//Functions de ordem maior

//Array de números
const numeros = [1, 2, 3, 4, 5];

//Método forEach - percorre o array

numeros.forEach(function(numero){
    console.log(numero); // Imprimir o número atual do array
})

// Array de letras
const letras = ["A", "B", "C", "D", "E"];

letras.forEach(function(letra, indice){
    console.log(`${indice}: ${letra}`); // Exemplo de saída: "0: A", "1:B" ..
});

const tarefas = [
    {
        id:1,
        texto:"Estudar", //Texto de tarefas
        completo: false, //Status de conclusão
    },
    {
        id:2,
        texto:"Trabalhar",
        completo: false,
    },
    {
        id:3,
        texto:"Limpar",
        completo: true,
    },
]

tarefas.forEach(function (tarefas, indice, minhasTarefas){
    console.log(`${indice + 1}: ${tarefas.texto}`);
    console.log(minhasTarefas);
})

const vetorDeTextoDasTarefas = tarefas.map(function(tarefas){
    return tarefas.texto;
})

const tarefa1 = tarefas.filter(function (tarefas){
    return tarefas.id === 1;
})

console.log(tarefa1);

const vetor = [1, 2, 3, 4];

const valorInicial = 0;

const soma = vetor.reduce(function (acumulador, elementoAtual){
    return acumulador + elementoAtual;
}, valorInicial);

console.log(soma);