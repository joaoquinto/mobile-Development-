class Pessoa {
  String nome;
  int _idade;
  double _altura;

/*   Pessoa(String nome, int idade, double altura) {
    this.nome;
    this.idade;
    this.altura;
  } */

//Construtor
  Pessoa(this.nome, this._idade, this._altura);

  //Named constructor, serve para criar outras opções de construtores.
  Pessoa.nascer(this.nome, this._altura) {
    _idade = 0;
    print("$nome nasceu");
    dormir();
  }

  void dormir() {
    print("$nome esta dormindo");
  }

  void aniver() {
    _idade++;
  }

  int get idade {
    return _idade;
  }

// Get
  double get altura {
    return _altura;
  }

// Set
  set altura(double altura) {
    if (altura > 0.0 && altura < 3.0) {
      _altura = altura;
    } else {
      print("Sua altura está errada");
    }
  }
}

void main(List<String> args) {
  // Instânciar classe para criar um obejto.
  Pessoa pessoa = new Pessoa("João", 30, 1.65);

//Métodos
  pessoa.dormir();

  Pessoa nene = new Pessoa.nascer("Enzo", 0.6);

  nene.altura = 5.0;

  print(nene.altura);
}
