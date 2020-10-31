"use strict";

/* Cria um objeto apartir de outro objeto, e se atualizando com base no seu criador.*/
var pessoa = {
  nome: "Matheus"
};
var pessoa2 = pessoa;
console.log(pessoa == pessoa2);