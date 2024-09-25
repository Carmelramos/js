// Estrutura de repetição

//While é uma estrutura de controle - "enquanto"

let contador = 0;
while (contador < 3) {
    console.log("miau");
    contador = contador + 1;    
}

for (let i = 0; i < 10; i++){
    console.log(`Número da repetição for: ${1}`);
}

const tarefas = [
    {
        id:1,
        texto:"tirar o lixo",
        completo:false,
    },
    {
        id:2,
        texto:"jantar com a esposa",
        completo:false,
    },
    {
        id:3,
        texto:"reunião com o chefe",
        completo:true,
    },
];

for(let i = 0; i < tarefas.length; i++){
    console.log(`Tarefa ${tarefas[i].id}: ${tarefas[i].texto}`)
}