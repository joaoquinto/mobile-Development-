"use strict";

var cadastro = [{
  name: "Sotuwya",
  data: "20/05/1999",
  cpf: "757.498.870-65"
}, {
  name: "Pinxoy",
  data: "27/10/1999",
  cpf: null
}, {
  name: "Mofan",
  data: "20/05/1999",
  cpf: null
}];
cadastro[1].cpf = "017-083-985-03";
cadastro[1].dataCadastro = "24/11/2020";

for (var index = 0; index < cadastro.length; index++) {
  var element = cadastro[index];

  if (element.cpf == null) {
    console.log("O seu nome \xE9 ".concat(element.name, " com o e nasceu ").concat(element.data));
    console.log("Por favor ".concat(element.name, " adicione o seu CPF na pr\xF3xima atualiza\xE7\xE3o!"));
  } else {
    console.log("O seu nome \xE9 ".concat(element.name, " com o CPF: ").concat(element.cpf, " e nasceu ").concat(element.data));
    console.log("Obrigado Sr(a) ".concat(element.name, " pelo o seu ingresso ao nosso cadastro!"));
  }
}

console.log(cadastro[1].dataCadastro);
/* let nomes = ["Mathues", "Maria", "José"]

for (let index = 0; index < nomes.length; index++) {
    const element = nomes[index];
    console.log(element);

}

 */