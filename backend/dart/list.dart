void main(List<String> args) {
  List<String> nomes = ["Daniel", "João", "Thiago"];

  for (var nome in nomes) {
    print(nome);
  }

  nomes.add("Wesley");

  nomes.forEach((element) {
    print("${element == "João" ? "Gotcha" : "errou"}");
  });

  print(nomes.indexOf("Wesley"));

  print(nomes.contains("João"));
}
