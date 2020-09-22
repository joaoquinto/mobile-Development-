let pessoa = {
    nome: "JOOA"
}

let pessoa2 = pessoa;

console.log(pessoa == pessoa2);

pessoa2.nome = "João";

console.log(pessoa.nome);