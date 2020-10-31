/* Rest operator, serve para criar array por função o parametro é definido por
    ...nomedoparametro

*/

function imprimeNumero(...args) {
    for (let index = 0; index < args.length; index++) {
        const element = args[index];
        console.log(element);
    }

    args.forEach(element => {
        if (element % 2 == 0) {
            console.log(`element ${element} é par`);
        } else {
            console.log(`element ${element} não é par`);
        }
    });

    console.log(args.length);
}


imprimeNumero(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)