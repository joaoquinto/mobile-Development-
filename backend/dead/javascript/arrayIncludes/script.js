let numeros = [1, 2, 3, 4, 5, 6];

/* Função que verificar um Array e adciona se não tiver o elemento requerido:
    com os argumetos:
        array => pega o Array a ser verificado,
        valorIdentifica => Diz o valor a ser identificado ,
*/

function verificaArray(array, valorIdentifica) {
    if (array.includes(valorIdentifica) == true) {
        console.log(`Tem o elemento ${valorIdentifica} que é requisitado nessa função requisitado`);
        console.log(`Array numeros : ${array}`);
    } else {
        console.log(`Foi adicionado o elemento de valor ${valorIdentifica} e agora seu Array tem ${array.push(valorIdentifica)} elementos.`);
        console.log(array);
    }
}  

verificaArray(numeros, 6);





