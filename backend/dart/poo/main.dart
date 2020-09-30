import 'cachorro.dart';
import 'gato.dart';

void main(List<String> args) {
  Cachorro cachorro = new Cachorro("Doguinho", 10.0, 5);

  cachorro.exibir();
  cachorro.brincar();
  cachorro.fazerSom();

  Gato gato = new Gato("Gatinho", 5.0);

  gato.exibir();
  print(gato.estaAmigavel());
  gato.fazerSom();

/*   Animal animal = new Animal("Rex", 20.0);
 */
}
