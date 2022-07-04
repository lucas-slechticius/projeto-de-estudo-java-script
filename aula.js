
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


// FIZZBUZZ
// Divisível por 3 => Fizz
// Divisível por 5 => Buzz
// Divisível por 3 e 5=> FizzBuzz
// Não é um número => 'Não é um número' 

const resultado = fizzBuzz(30);
console.log(resultado);

function fizzBuzz(entrada){
    if ( typeof entrada !== 'number')
        return 'Não é um número';
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz';
    if (entrada % 3 === 0)
        return 'Fizz'
    if (entrada % 5 === 0)
        return 'Buzz';
    return entrada;
}

//Radar de medição de Velocidade
//limite até 70 km/h
// a cada 5km acima do limite você ganha 1 ponto
// usar a função Math.Floor() ' arredondar para o 
//decimal mais próximo
// Caso passe o limite de pontos, Carteira Sus

verificarVelocidade(81);

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if (velocidade <= 70)
        console.log('Ok');
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto));
        if (pontos >= 12)
            console.log('Carteira Suspensa');
        else
            console.log('Pontos',pontos);
    }


    // Exibir Par ou Impar

exibirTipo(5);
function exibirTipo(limite) {
    for (let i = 0; i <= limite; i++) {
        if ( i % 2 === 0)
            console.log(i,'PAR');
            else
            console.log(i,'IMPAR');
        }
    }
}

// Criar um método para Ler propriedades de um objeto e
// exibir somente as propriedade do tipo string que estão nesse objeto

const filme = {
    titulo : 'Vingadores',
    ano : 2018,
    diretor : 'Carlos',
    personagem : 'Thor'
}

exibirPropriedade(filme);
function exibirPropriedade(obj){
    for (prop in obj)
        if(typeof obj[prop] === 'string')
            console.log(prop,obj[prop])
}


// Criar função de Soma que retorna a
// soma de todos os multiplos de 3 e 5

// Multiplos de 3
// 3, 6, 9

//Multiplos de 5
// 5, 10

//Somandos os multiplos
somar(10);
function somar(limite) {
    let multiploDe3 = 0;
    let multiploDe5 = 0;
    for(i = 0; i <= limite; i++){
        if(i % 3 === 0)
        multiploDe3 += i;
        if(i % 5 === 0)
        multiploDe5 += i;
    }
    console.log(multiploDe3 + multiploDe5);
}

// Exercício de Nota Escolar
// Ober a Média a partir de um Array

//0-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A

const array = [70,70,80];
//73.33

console.log(mediaDoAluno(array));

function mediaDoAluno(notas){
    const soma = 0;
    for (let nota of notas) {
        soma += nota;
    }
    const media = soma/(notas.length);

    if (media < 59) return 'F';
    if (media < 69) return 'D';
    if (media < 79) return 'C';
    if (media < 89) return 'B';
    return 'A'
}

