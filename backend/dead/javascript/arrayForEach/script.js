const numeros = [1, 2, 3, 4, 5, 6];


// forEach roda um bloco de code em cada elemento do Array, e passa elas em um parametro. 
// Boa pratica seria usar o singular do nome do Array.
numeros.forEach(numero => {
    if (numero % 2 == 0) {
        console.log(`O número ${numero} é par`);
    } else {
        numero++;
        numero % 2 == 0;
        console.log(`Agora o número ${numero} é par `);
    }
});


