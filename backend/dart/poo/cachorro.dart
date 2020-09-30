import 'animal.dart';

class Cachorro extends Animal {
  int fofura;

// Contrutor com extends
  Cachorro(String nome, double peso, this.fofura) : super(nome, peso);

  void exibir() {
    print("$nome \n $peso \n $fofura");
  }

  void brincar() {
    fofura += 10;
    print("Fofura do $nome aumentou para $fofura!!!");
  }

// Modificar um metodo que vem a partir de uma herança
  @override
  void fazerSom() {
    print("$nome fez algum auaua");
  }
}
