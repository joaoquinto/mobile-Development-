function retornaNumPar(n) {
    if (n % 2 == 0) {
        console.log(`n agora é par ${n}`);
    } else {
        console.log(n);
        retornaNumPar(n - 1)
    }
}

retornaNumPar(33);

function numpar(n) {
    while (n >= 0) {
        console.log((n % 2 == 0 ? `${n} é par` : `${n} é ímpar`));
        n--;
    }
}

numpar(1);