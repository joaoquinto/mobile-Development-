const parOuImpar = (n) => {
    return (n % 2 == 0) ? console.log(`O número ${n} é par`) : console.log(`O número ${n} é ímpar`);
};
parOuImpar(3);


// Se a arrow function só tem um parâmetro podemos remover os parênteses do argumento return.
// Se a expressão for pequena, pode até ser feita em uma linha sem prejudicar a leitura do código.

const raizQuadrada = n => n * n;
console.log(raizQuadrada(5));


