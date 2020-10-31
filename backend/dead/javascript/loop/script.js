
let result;
let i = 0;

while (i <= 50) {
    result = i % 2 == 0;
    if (result == true) {
        console.log(`${i} é par`);
    } else {
        console.log(`${i} é ímpar`);
    }
    i++;
}


