// let numeros = [1,5,10,15,20,25];

// for (let index = 0; index < numeros.length; index++) {
//     const element = numeros[index];
//     console.log(element);
//     console.log("index: "+index);

// }

// console.log(Object.keys(numeros));

// console.log("Length "+numeros.length);


let nome = ["Matheus", "Maria", "José"];

for (let index = 0; index < nome.length; index++) {
    const element = nome[index];
    if (element == "José") {
        console.log("Achei");
    }
}


for (let index = 0; index < nome.length; index++) {
    const element = nome[index];
    console.log((element == "José") ? "Achei" : "Não achei");
}


function isEven(...args) {
    args.forEach(element => {
        console.log((element % 2 == 0) ? true : false);
    });
}

isEven(1,2,3,4,5,6,7,8,9,10);