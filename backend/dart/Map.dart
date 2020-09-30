void main(List<String> args) {
  //tipo da chave, Tipo de dados,nome do map
  Map<int, String> ddds = Map();
  ddds[11] = "São Paulo";
  ddds[19] = "Campinas";
  ddds[71] = "Salvador";

  Map<String, dynamic> pessoa = Map();
  pessoa["nome"] = "Enzo";
  pessoa["nome"] = "vitor";

  pessoa.forEach((key, value) {
    print("${value == "vitor" ? "Sim" : "Não"}");
  });

  print(pessoa["nome"]);
}
