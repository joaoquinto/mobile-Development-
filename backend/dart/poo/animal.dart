abstract class Animal {
  String nome;
  double peso;

  Animal(this.nome, this.peso);

  void come() {
    print("$nome comeu!!");
  }

  void fazerSom() {
    print("$nome fez algum som");
  }
}
