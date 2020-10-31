
// var       condição           contador
for (let numero = 2; numero < 100; numero = numero * 2) {
    console.log(`O número é: ${numero}`);
}

let nome = "Matheus";

for (let i = 0; i < 10; i++) {

    if (i == 3) {
        nome = "João";
    }

    if (i == 5 && nome == "João") {
        console.log(`O nome é ${nome}`);
        break;
    }
    console.log(i);
} 