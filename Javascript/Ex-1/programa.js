const readline = require('readline');

// Criar interface para ler entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Gerar um número aleatório entre 1 e 10
const numeroSecreto = Math.floor(Math.random() * 10) + 1;

// Perguntar ao usuário
rl.question("Adivinhe um número entre 1 e 10: ", (palpite) => {
    const palpiteNumero = parseInt(palpite);

    if (palpiteNumero === numeroSecreto) {
        console.log("Parabéns! Você acertou o número!");
    } else {
        console.log(`Que pena! O número secreto era ${numeroSecreto}.`);
    }

    // Fechar a interface
    rl.close();
});





