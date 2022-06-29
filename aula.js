
let nome = 'cleber';  //let é váriavel meu chess
let idade = 19;
let tamanhoDoPe = 44;
let sobrenome = 'jovem';

// OBjetos! Criar como se fosse uma váriavel
// mas colocar funções dentro da mesma

let pessoa = {
    nome: 'lucas',
    idade: 19,
    tamanhoDoPe: 44,
    sobrenome: 'slechticius'
};

console.log(pessoa);

let ricardao = ['ricardão',41,'calça',8];

console.log(ricardao);
console.log(ricardao.length);

//funções - Perceba que eu vou usar
// uma função com o () colocando uma
// váriavel que vai virar uma função
// lógica, o que é bem maneiro

let corSite = "azul";

    function resetaCor(cor){
            corSite = cor;
    };
console.log(corSite);
//Certo, até essa parte vai estar a cor
//azul, correto? Agora, como chamar
//a função? Muito fácil, é só colocar
//o nome dessa função e o que você
//vai colocar de váriavel dentro:

resetaCor("vermelho");
console.log(corSite);


