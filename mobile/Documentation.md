# Documentação para dúvidas ou exemplos

## Dúvidas

1. [CookBook](https://flutter.dev/docs/cookbook)
2. [Flutter for Web Developers](https://flutter.dev/docs/get-started/flutter-for/web-devs)
3. [Widgets Catalog](https://flutter.dev/docs/development/ui/widgets)
3. [Widgets Index](https://flutter.dev/docs/reference/widgets)

## Infos 

### Statefull
     - São Widgts que teem mudança de estado, obtem mudanças na tela do seu app.

### Stateless
    - Do contrário do Statefull ele não tem mudança de estado e não possibilita o uso de setState.


## Inicialização

```dart 
// Importação Para Utilzar o material Design
import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    //obs: Existem outros, como mudar cor ou acrescentar uma cor default para widgets.
    // Parametros opcionais do MaterialApp()
    // obs: O title é um paramentro opicional /Titulo para o app
    // só é usado internamente ou seja
    // não vai ser visto em nenhum local
    title: "Contador de Pessoas",
    // Identifica o que vai ser iniciado primeiro.
    home: NomeDeOndeDeveSerInicializado(),
    // Retira a flag de debug
    debugShowCheckedModeBanner: false,
  ));
}
```

### Import para utilizar arquivos de outras pages

```dart

import 'package:nomedoprojeto/nomedapagina.dart';

```

### Para buildar um apk

```flutter
flutter build apk
```

## Widgets 

### Stack

```dart 
// Stack serve para por um widget sobre o outro
Stack()
```

### Image

``` dart 
// Serve para adicionar imgs, primeiro adicione as imgs locais no arquivo pubspec.yaml
 Image.asset(
          'img/restaurant.jpg',
          // fit serve para preenchimento da tela, mas só funciona se declarar height ou width
          fit: BoxFit.cover,
          height: 1000.0,
        ),
```


### FutureBuilder 

```dart
/* O FutureBuilder() serve para apresentar algo enquanto 
      o seu aplicativo esta criando algo ou pegando dados de uma API*/
      body: FutureBuilder<Map>(
          // Diz qual future metodo usar
          future: quotation.getData(),
          // Faz as condicionais para cada callback utilizando ConnectionState
          //Função que irá usar o FutureBuilder
          builder: (context, snapshot) {
            switch (snapshot.connectionState) {
              case ConnectionState.none:
              case ConnectionState.waiting:
                return Center(
                  child: Text(
                    "Carregando Dados...",
                    style: TextStyle(
                      color: Colors.amber,
                      fontSize: 25,
                    ),
                    textAlign: TextAlign.center,
                  ),
                );
              //Em caso de não precisar carregar ele exibira isso
              default:
                if (snapshot.hasError) {
                  return Center(
                    child: Text(
                      "Erro ao Carregar Dados...",
                      style: TextStyle(
                        color: Colors.amber,
                        fontSize: 25,
                      ),
                      textAlign: TextAlign.center,
                    ),
                  );
                } else {
                  // Envia a resposta do json para a classe
                  quotation.dolar =
                      snapshot.data["results"]["currencies"]["USD"]["buy"];
                  quotation.euro =
                      snapshot.data["results"]["currencies"]["EUR"]["buy"];
                  return Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: SingleChildScrollView(
                        child: Column(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        Icon(
                          Icons.monetization_on,
                          size: 120,
                          color: Colors.amber,
                        ),
                        buildTextField("Reais", "R", quotation.realController,
                            quotation.realChanged),
                        buildTextField("Dólar", "US", quotation.dolarController,
                            quotation.dolarChanged),
                        buildTextField("Euro", "€", quotation.euroController,
                            quotation.euroChanged),
                      ],
                    )),
                  );
                }
            }
          }),
```

### Widget Functio

```dart
import 'package:flutter/material.dart';

Widget buildTextField(String label, String prefix,
    TextEditingController tController, Function method) {
  return Padding(
    padding: const EdgeInsets.all(8.0),
    child: TextField(
      controller: tController,
      keyboardType: TextInputType.number,
      cursorColor: Colors.amber,
      style: TextStyle(color: Colors.amber),
      decoration: InputDecoration(
        labelText: "$label",
        labelStyle: TextStyle(color: Colors.amber),
        border: OutlineInputBorder(),
        // Modifica o prefix dependendo da entrada
        prefixText: "${prefix == "€" ? prefix : "$prefix\$"}",
        prefixIcon: Icon(
          Icons.attach_money,
          color: Colors.amber,
        ),
      ),
      onChanged: method,
    ),
  );
}

// chamada da Widget Functio
  buildTextField("Reais", "R", quotation.realController,
                            quotation.realChanged),
```



## Atributos de Widgets

### MaxAxisAlignment

```dart 
 // Serve para alinhamento do eixo principal de uma coluna ou uma linha
// Obs: Separa dois widgtes
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              //Serve para informar o tamanho do alinhamento
              mainAxisSize: MainAxisSize.min,
```

### onPressed 

```dart 
// Local onde se coloca a função que vai ser chamada quando o widget for pressionado
                    onPressed: () {
                      _changePeople(1);
                    },
```

## Mudança de Estado

### setState

```dart 
// Utilize setState para informa a tela que ocorreu uma mudança de informações
    setState(() {
      _people += delta;
    });
```

## Consumo de API

### Get 

```dart
// Uma das formas.

// Url com a key
  final request =
      'https://api.hgbrasil.com/finance?format=json-cors&key=c1a90dfd';

// Future metodo que pega a string e lê o json
  Future<Map> getData() async {
    http.Response response = await http.get(request);
    return json.decode(response.body);
  }
```

