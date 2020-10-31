// shift() remove o primeiro elemento de um array e retorna o elemento removido
// unshift() adiciona um ou mais elementos no inicio de um array e retorna a quantidade do array

let produtos = ["Bala", "Carro", "Roda","Ble","Bla"];


console.log("lastIndexOf retorna o último index do array, conta de trás para frente então o lastIndex de Bala é "+produtos.lastIndexOf("Bala"));

console.log(produtos.length);
// Retira e mostra o elemento que foi retirado do Array 
console.log("Foi retirado o elemento " + `"${produtos.shift()}"` + " do Array produtos");
console.log("o Array produto tem os elementos "+produtos);

// Checa a quantidade de elementos do Array/Se for < 3 implementa um elemento com a function unshift()
if (produtos.length < 3) {
    produtos.unshift("Bala");
} else {
    // se o Array for => 3 
    console.log(`Seu Array tem a quantidade necessária de elementos e ela é de: ${produtos.length}`);
}

