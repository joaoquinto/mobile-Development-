


let y = 5;
// Nested Scopes
const multiplicar = function (n) {
    let y = n * 2;
    console.log(y);
    if (y == 10) {
        let y = 55;
        console.log(y);
    }
}

multiplicar(5);
console.log(y);

