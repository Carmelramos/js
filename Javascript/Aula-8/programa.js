//FUNÇÕES - Function

function dizer_ola(nome = "Fulano"){
    console.log(" Olá, " + nome);
}

dizer_ola("Pedro");
dizer_ola("Carmel");
dizer_ola(" ");
dizer_ola();


function se_apresentar(nome, idade){
    console.log(" Meu nome é " + nome + " e eu tenho " + idade + " anos.");
}

se_apresentar("Carmel", 35);
se_apresentar("Pedro", 18);
se_apresentar("Lucas", 2);
se_apresentar("Carmel")  //não definiu o alor idade - undefined

function criar_nome_completo(nome, sobrenome, sexo){
    if (sexo == "M") {
        return `Sr. ${nome} ${sobrenome}`;
    } else if (sexo == "F"){
        return ` Sra. ${nome} ${sobrenome}`;
    } else{
        return ` ${nome} ${sobrenome}`
    }
}

const nomeCompleto = criar_nome_completo("Pedro", "Silva", "M")
const nomeCompleto2 = criar_nome_completo("Carmel", "Ramos", "F")

dizer_ola(nomeCompleto);
dizer_ola(nomeCompleto2);

// Funções seta (Arrow Function) - Sem parâmetros, apenas exibe a mensagem

const dizer_oi = () => console.log("Oi");

dizer_oi();

const dizer_oi_tudo_bem = () =>{
    console.log("Oi");
    console.log("Tudo bem?")
}

dizer_oi_tudo_bem();


const somar = (x, y) =>{
    return x + y;
}

const resultado = somar(10,15);

console.log(resultado);
