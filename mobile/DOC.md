# Flutterproject


async
=======
Tudo que tem leitura e salvamento de arquivos, não ocorre instantaneamente ou seja ocorre um "lag" na resposta, assim se usa uma função async.


Stateless
==========
Widgets Stateless são widgets que não possuem um estado interno ou seja 
são itens que vc vai desenhar e ele nunca irão mudar.

Stateful
========
Widgets Stateful são widgets que possuem estado interno
que podem ser modificados ao longo do tempo.



Dúvidas
=======

1. [CookBook](https://flutter.dev/docs/cookbook)
2. [Flutter for Web Developers](https://flutter.dev/docs/get-started/flutter-for/web-devs)
3. [Widgets Catalog](https://flutter.dev/docs/development/ui/widgets)
3. [Widgets Index](https://flutter.dev/docs/reference/widgets)





Para buildar um apk
===================
```flutter
flutter build apk
```



Import para usar o Material Design
===================================

```dart
import 'package:flutter/material.dart';
```

Import para utilizar arquivos de outras pages
==============================================

```dart

import 'package:nomedoprojeto/nomedapagina.dart';

```


Declarando os controllers 
=========================

```dart
  TextEditingController NomeDoControler = TextEditingController();
```

Para rodar o programa e declarar qual vai ser a primeira page que o user vai ver
================================================================================

```dart

void main() => runApp(
      MaterialApp(
        home: NomeDaPagina(),
      ),
    );


```



Para validar input 
====================================

```dart

// Declare a variável
GlobalKey<FormState> _formKey = GlobalKey<FormState>();

// Declare a key: dentro do (widget form)
key: _formKey,

//chame o atributo (validator:)
validator: (value) {
                    if (value.isEmpty) {
                      return ;
                    }
                  },

//Pode se colocar vários validadores
```



Rodar Genymotion
=================

Para emular no Genymotion entre na pasta .vscode, acesse o arquirvo launch.jso,
e modifique adicionando os args 

```json

{
    // Use o IntelliSense para aprender sobre possíveis atributos.
    // Passe o mouse para ver as descrições dos atributos existentes.
    // Para obter mais informações, visite: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Flutter",
            "request": "launch",
            "type": "dart",
            "args" : ["--enable-software-rendering", "-d", "all"]
        }
    ]
}



```






Input em type password
=======================

Deixar a senha escondida como no html

```dart
       Padding(
                padding: EdgeInsets.only(top: 9.0, bottom: 9.0),
                child: TextFormField(
                  keyboardType: TextInputType.text,
                  obscureText: true,  // Para transformar um input em type password
                  decoration: InputDecoration(
                    labelText: "Senha",
                    labelStyle: TextStyle(color: Colors.blue, fontSize: 20.0),
                  ),
                  textAlign: TextAlign.center,
                  style: TextStyle(color: Colors.black, fontSize: 16.0),
                  controller: passwordController,
                  validator: (value) {
                    if (value.isEmpty) {
                      return "Insira sua senha";
                    }
                  },
                ),
              ),
```




 Para adicioanar uma imagem ou custom fonts
============================================

Vá no arquivo pubspec.yaml


Para usar imagens SVG
========================


```dart 

//add o package no pubspec.yaml

// import o package na página
import 'package:flutter_svg/flutter_svg.dart';

// informe o caminho 
  final String assetName1 = 'images/login2.svg';

  // Você pode regular o tamanho do img com um container
  // undraw.io tbm tem um package.

// local
child: Container(
                  height: 200,
                  child: SvgPicture.asset(assetName1),
                ),
              ),


// via internet 
child: Container(
                  height: 200,
                  child: SvgPicture.network(url),
                ),


``` 

Para fazer um botão arredondado
====================

```dart
Container(
                    child: ButtonTheme(
                        minWidth: 500.0,
                        height: 50.0,
                        child: RaisedButton(
                          color: Colors.deepPurpleAccent,
                          shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(20)),
                          onPressed: () {},
                          child: Text(
                            "$login",
                            style: TextStyle(color: Colors.white),
                          ),
                        ))),
```

Texto com posicionamentos diferentes
=================

```dart 


Container(
                        // Use o aligment ou o Align()
                        alignment: Alignment.topLeft,
                        child: Text(
                          userName,
                          style: TextStyle(
                              color: Colors.grey, fontWeight: FontWeight.bold),
                        ),
                      ),

```


Espaçamento entre duas colunas 
===========================
```dart
 Row(
                        // Serve para dar um espaçamento entre duas colunas, em uma row.
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: <Widget>[
                          Column(
                            children: <Widget>[
                              Text(
                                password,
                                style: TextStyle(
                                    color: Colors.grey,
                                    fontWeight: FontWeight.bold),
                              )
                            ],
                          ),
                          Column(
                            children: <Widget>[
                              Text("$forgot",
                                  style: TextStyle(
                                      color: Colors.deepPurpleAccent,
                                      fontWeight: FontWeight.bold))
                            ],
                          )
                        ],
                      ),
```

Input border quando estiver sendo usado ou não usado.
=======================================================

```dart

TextField(
                      keyboardType: TextInputType.emailAddress,
                      obscureText: true,
                      decoration: InputDecoration(
                        //Aqui
                        focusedBorder: OutlineInputBorder(
                          borderSide: BorderSide(
                            color: Colors.pink
                          )
                        ),


  TextField(
                      keyboardType: TextInputType.emailAddress,
                      obscureText: true,
                      decoration: InputDecoration(
                        enabledBorder:
                         OutlineInputBorder(
                          borderSide: BorderSide(
                            width: 5,
                            color: Colors.lightBlue
                          )
                        ),
                        hintText: "Entre com a sua senha",
                      ),
                    ),

```

Border container
=============================

```dart
                    Container(
                      decoration: BoxDecoration(
                        border: Border.all(color: Colors.grey)
                      ),

```

Input com border
====================

```dart
TextFormField(
                      keyboardType: TextInputType.emailAddress,
                      decoration: InputDecoration(
                        border: OutlineInputBorder(
                            borderRadius:
                                BorderRadius.all(Radius.circular(8.0))),
                        hintText: "xyz@example.com",
                      ),
                    ),


```

Validator form
==============

```dart

// Crie uma variável para o parametro Key do widget Form()

final _formKey = GlobalKey<FormState>();

 Form(
                    // Adicione a kye
                      key: _formKey,
                      child: TextFormField(
                        keyboardType: TextInputType.emailAddress,
                        decoration: InputDecoration(
                          hintText: "xyz@example.com",
                        ),
                        // Use o atributo validator
                        validator: (value) {
                          if (value.isEmpty) {
                            return 'Por favor insira seu email ou usuário.';
                          }
                          return null;
                        },
                      ),
                    )

// Chame ele no parametro onpress()

onPressed: () {
                            if (_formKey.currentState.validate() || _formKeyp.currentState.validate()) {
                            }
                          },

```




```dart 
//Função que Cria um Widget TextField
Widget buildTextField(String label, TextEditingController controllers,
    String sifrao, Function onchanged) {
  return Theme(
    data: ThemeData(
        inputDecorationTheme: InputDecorationTheme(
            enabledBorder: OutlineInputBorder(
                borderSide: BorderSide(color: Colors.amber)))),
    child: TextField(
      keyboardType: TextInputType.number,
      controller: controllers,
      decoration: InputDecoration(
        labelText: label,
        labelStyle: TextStyle(color: Colors.amber),
        hintText: sifrao,
        hintStyle: TextStyle(fontSize: 20, color: Colors.amber),
        border: OutlineInputBorder(),
      ),
      cursorColor: Colors.amberAccent,
      style: TextStyle(
        color: Colors.white,
        fontSize: 25.0,
      ),
      onChanged: onchanged,
    ),
  );
}

```