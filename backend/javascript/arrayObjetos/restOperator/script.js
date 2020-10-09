let num = 1;
let num1 = 5;
let num2 = 3;
let num3 = 4;


function imprimeNumeros(...args) {
    console.log(args);
    for (let index = 0; index < args.length; index++) {
        const element = args[index];
        console.log(element);
    }

}


imprimeNumeros(num,num1,num2,num3)