function lembrarS(x) {
    return function (y) {
        return x + y;
    }
}

let soma1 = lembrarS(2);
console.log(soma1(2));