let pessoa = {
    nome: "João",
    profissão: "Programador",
    idade: 28,


}
console.log(pessoa.profissão.toLowerCase());


let cachorro = {
    patas: 4,
    nome: "Dog",
    vivo: false,
    // Metodos em objetos
    latir: function () {
        console.log("MORRRI");
    }
};
cachorro.latir();

let carro = {
    marca: "VW",
    portas: 4,
    eletrico: false,
    motor: 1.0,
    produto: function () {
        console.log(`Seu carro é da marca ${carro.marca} com ${carro.portas} portas, com motor ${carro.motor} e ele é ${(carro.eletrico == true) ? "Eletrico" : "não é eletrico"}`);
    }
}

// delete carro.portas;

// sobescrever um objeto existente
carro.eletrico = true;

carro.garantia = "10 anos"

carro.produto();

// Juntar objetos
const cadastro = Object.assign(pessoa, carro);
Object.assign(pessoa, carro);

function show() {
    console.log(`Senhor ${cadastro.nome} você tem ${cadastro.idade} anos e a profissão de ${cadastro.profissão} o seu carro é da marca ${cadastro.marca} 
                    com o motor ${cadastro.motor.toPrecision(2)} e motor ${(cadastro.eletrico = true) ? "eletrico" : "a combustão"}. Sua garantia é de ${cadastro.garantia}`);
}

show();
