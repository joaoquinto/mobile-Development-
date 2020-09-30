import 'dart:math';

void main() {
  printIntro();
  calcSoma(5, 5);
  print(calcMult(5.5, 6));

  print(calcArea(5));

  criarBotao("BotãoSair", botao, cor: "Preto", largura: 26.0);
  criarBotao("texto", botao, largura: 1);
}

void printIntro() {
  print("Seja Bem Vindo");
}

void calcSoma(double a, double b) {
  double res = a + b;
  print(res);
}

double calcMult(double a, double b) {
  double res = a + b;
  return res;
}

double calcArea(double raio) {
  return pi * pow(raio, 2);
}

// Parametros Opcicionais
void criarBotao(String texto, Function criadoFunc,
    {String cor = "cinza", double largura}) {
  print(texto);
  print(cor ?? "Preto");
  print(largura ?? 10);
  criadoFunc();
}

void botao() {
  print("object");
}
