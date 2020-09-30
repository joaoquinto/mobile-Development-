import 'animal.dart';

class Gato extends Animal {
  Gato(nome, peso) : super(nome, peso);

  void exibir() {
    print("$nome \n $peso");
  }

  bool estaAmigavel() {
    return true;
  }

  @override
  void fazerSom() {
    print("$nome fez miaauu");
  }
}
