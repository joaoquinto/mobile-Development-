import 'package:flutter/material.dart';
import 'package:imc/imc.controller.dart';

class Imc extends StatefulWidget {
  @override
  _ImcState createState() => _ImcState();
}

class _ImcState extends State<Imc> {
  ImcClass i = new ImcClass();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('Calcule o seu IMC'),
          centerTitle: true,
          // Modifica a elevação de algo
          elevation: 0.0,
          backgroundColor: Colors.green,
          // Ações que serão encontradas no appBar
          actions: [
            IconButton(
                icon: Icon(
                  Icons.refresh,
                  color: Colors.lightGreenAccent,
                ),
                onPressed: () {
                  setState(() {
                    i.resetFields();
                  });
                })
          ],
        ),
        backgroundColor: Colors.white,
        // Serve para tratar do bottom overflow do teclado escondendo a tela, ele deixa rolar a tela.
        body: SingleChildScrollView(
            child: Form(
          key: i.formKey,
          child: Column(
            // Nega ou modifica o posicionamento padrão de um widget pode ser utilizado para centralizar um widget
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Icon(
                Icons.person,
                size: 120,
                color: Colors.green,
              ),
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: TextFormField(
                  keyboardType: TextInputType.number,
                  decoration: InputDecoration(
                    labelText: "Peso (kg)",
                    labelStyle: TextStyle(color: Colors.green),
                    // Modifica quando ativado
                    enabledBorder: UnderlineInputBorder(
                        borderSide: BorderSide(color: Colors.green)),
                    //Modifica quando focado
                    focusedBorder: UnderlineInputBorder(
                        borderSide: BorderSide(color: Colors.greenAccent)),
                  ),
                  controller: i.weightController,
                  cursorColor: Colors.green,
                  textAlign: TextAlign.center,
                  style: TextStyle(color: Colors.green, fontSize: 25),
                  validator: (value) {
                    if (value.isEmpty) {
                      return 'Por favor informe seu peso';
                    }
                    return null;
                  },
                ),
              ),
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: TextFormField(
                  keyboardType: TextInputType.number,
                  decoration: InputDecoration(
                    labelText: 'Altura (cm)',
                    labelStyle: TextStyle(color: Colors.green),
                    enabledBorder: UnderlineInputBorder(
                        borderSide: BorderSide(color: Colors.green)),
                    focusedBorder: UnderlineInputBorder(
                        borderSide: BorderSide(color: Colors.greenAccent)),
                  ),
                  controller: i.heightController,
                  cursorColor: Colors.green,
                  textAlign: TextAlign.center,
                  style: TextStyle(color: Colors.green, fontSize: 25),
                  validator: (value) {
                    print(value);
                    if (value.isEmpty) {
                      return 'Por favor informe sua altura';
                    }
                    return null;
                  },
                ),
              ),
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Container(
                  height: 50.0,
                  child: RaisedButton(
                    onPressed: () {
                      setState(() {
                        i.validateInputs();
                      });
                    },
                    child: Text(
                      'Calcular',
                      style: TextStyle(color: Colors.white, fontSize: 25),
                    ),
                    color: Colors.green,
                  ),
                ),
              ),
              Text(
                '${i.infoText}',
                textAlign: TextAlign.center,
                style: TextStyle(color: Colors.green, fontSize: 20.0),
              )
            ],
          ),
        )));
  }
}
