let pessoa = {
    "name":"Matheus",
    "age":29,
    "position":"Developer",
    "languages":["PHP","JavaScript","Python"]
}

for (const i in pessoa) {
    if (pessoa.hasOwnProperty(i)) {
        const element = pessoa[i];
        console.log(element);
        
    }
}

/* Serve para trasformar um json em um texto */
let jsonToTexto = JSON.stringify(pessoa);
console.log(jsonToTexto);

let StringToJson = JSON.parse(jsonToTexto)
console.log(StringToJson);

