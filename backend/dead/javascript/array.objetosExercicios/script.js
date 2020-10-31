/* 
let numeros = [1, 2, 3, 4, 5];

for (let index = 0; index < numeros.length; index++) {
    const element = numeros[index];

    if (element == numeros[0]) {
        console.log(element);
    } else if(element == numeros[2]){
        console.log(element);
    }else if (element == numeros[3]) {
        console.log(element);
    }
    
}

let nomes = ["João", "Eu","vitor"];

console.log("espaço");

console.log(numeros.length);
console.log(nomes.length);

console.log("espaço");

let onibus = {
    "Rodas": 8,
    "maxPassageiros":40,
    "Portas":2
}

console.log(`Seu onubus tem ${onibus.Rodas} rodas, com o limite de ${onibus.maxPassageiros} pessoas e ele só tem ${onibus.Portas} portas `);

delete onibus.Rodas;

console.log(onibus.Rodas);

onibus.Janelas = 20;

console.log(onibus);

console.log(`Sua janela ${onibus.Janelas}`);

 */
/* 
let nomes = ["João", "Carlos", "Jailton"];

console.log((nomes.includes("João")) ? "João Existe" : "");


let numeros = [1, 2, 3, 4, 5];
let vida = ["carro", "trabalho", "casa"];

function verificaTamanho(arr) {
    if (arr.length >=5) {
        console.log("Muitos Elementos");
    } else {
        console.log("Poucos Elementos");
    }
}


verificaTamanho(numeros)
verificaTamanho(vida);

console.log(vida.length); */

let banco = [1, 2, 3, 4, 5];

banco.forEach(dinheiro => {
    console.log((dinheiro % 2 == 1) ? `${dinheiro} ímpa` : `${dinheiro} par`);
});


let casa = {
    "Porta": 1,
    "Garagem": 2,
    "Janelas": 50
}

casa.Banheiro = 45;

console.log(casa.Banheiro);

let frase = "A vida é bela caralho";

let palavras = frase.split(" ");

for (let index = 0; index < palavras.length; index++) {
    const element = palavras[index];
    console.log(element);
}

let calculadora = {
    somar: function (x, y) {
        console.log(`${x} + ${y} é = ${x + y} `);
    },
    subtrair: function (x, y) {
        console.log(`${x} - ${y} é = ${x - y}`);
    },
    multiplicar: function (x, y) {
        console.log(`${x} * ${y} é = ${x * y}`);
    },

    divisao: function (x, y) {
        console.log(`${x} / ${y} é = ${x / y}`);
    }
}

calculadora.somar(15, 15);
calculadora.subtrair(15, 15);
calculadora.multiplicar(15, 15);
calculadora.divisao(15, 15);
