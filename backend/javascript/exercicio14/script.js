function helloWorld() {
    console.log("Hello World");
}

helloWorld();

function idade(i) {
    console.log(`Você Tem ${i} anos`);
}

idade(20);

function soma(n, s) {
    return console.log(n + s);
}

soma(5, 5);



function random(n) {
    return console.log(Math.random(`O número random é ${n}`));
}

random(50);


function autoescola(idade) {
    if (idade >= 18) {
        console.log(`A sua idade está apta a dirigir`);
    } else {
        console.log(`Você não está apto a dirigir`);
    }
}

autoescola(18);


function type(t) {
    if (typeof t === 'number') {
        console.log(`O tipo de variável é Number`);
    } else if (typeof t === 'string') {
        console.log(`Ò tipo de variável é String`);
    } else if (typeof t === 'boolean') {
        console.log(`O tipo de variável é um boolean`);
    }
}

type(5);


function negaNegativo(n) {
    return console.log(` O seu número negativo ${n} foi convertido para => ${Math.abs(n)}`);
}

negaNegativo(-54 + 5);

function contarLetras(letras) {
    if (letras.length > 10) {
        console.log(`O seu texto "${letras}" tem mais de 10 caracteres`);
    } else {
        console.log(`O seu texto "${letras}" tem o número ${letras.length} de aceitável de caracteres`);
    }
}

contarLetras("Mozilla");

function potencia(x, p) {
    console.log(Math.pow(x, p));
}
potencia(7, 2);


function decrementa(x) {
    while (x >= 0) {
        if (x % 2 == 0) {
            console.log(x);
        }
        x--;
    }
}

decrementa(10);


