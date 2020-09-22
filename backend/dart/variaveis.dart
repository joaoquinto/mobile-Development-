void main() {
  String nome = "Lojinha do João";
  int bananas = 5;
  double preco = 10.5;
  // ignore: unused_local_variable
  bool aindaTem = true;

  bananas = 10;

  print(nome);
  print(bananas);
  print("O nome da minha lojihnha " + nome);
  print("A $nome tem $bananas bananas e o é: ${preco}");

  var exemplo2 = "Recebe qualquer tipo, mas se torna fixa";

  dynamic exemplo = "Recebe qualquer tipo indepêndente do que já recebeu antes";
  print(exemplo);

  exemplo = 1;

  print(exemplo2);
  print(exemplo);
}
