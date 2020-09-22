void main(List<String> args) {
  /* List numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  for (var numero in numeros) {
    print((numero % 2 == 0) ? "true" : "false");
  }

  numeros.forEach((element) {
    print((element % 2 == 0) ? "$element é par" : "$element é impar");
  });

  for (var i = 0; i < numeros.length; i++) {
    print(numeros.contains(i));
  }
 */
  int x = 0;

  List nomes = [];

  while (x <= 10) {
    nomes.add("João $x");
    x++;
  }
  print(nomes);
}
