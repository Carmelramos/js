const pessoa = {
    nome: "Carmel",
    idade: 35,
    cidade: "Brasília",
}

pessoa.profissão = "TI"

for (let propriedade in pessoa) {
    console.log(`${propriedade}: ${pessoa[propriedade]}`);
}
