// Importação Para Utilzar o material Design
import 'package:flutter/material.dart';

// Método para iniciar o app e informar a primeira page
void main() {
  runApp(MaterialApp(
    // Parametros opcionais do MaterialApp()
    // obs: O title é um paramentro opicional /Titulo para o app
    // só é usado internamente ou seja
    // não vai ser visto em nenhum local
    title: "Contador de Pessoas",
    // Identifica o que vai ser iniciado primeiro.
    home: Home(),
    // Retira a flag de debug
    debugShowCheckedModeBanner: false,
  ));
}

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  int _people = 0;
  String _infoText = "Pode Entrar";

  void _changePeople(int delta) {
// Utilize setState para informa a tela que ocorreu uma mudança de informações
    setState(() {
      _people += delta;

      if (_people < 0) {
        _infoText = "Você não pode ter $_people em um local";
      } else if (_people <= 10) {
        _infoText = "Pode Entrar";
      } else {
        _infoText = "Espaço lotado venha outro dia";
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    // Stack serve para por um widget sobre o outro
    return Stack(
      children: [
        Image.asset(
          'img/restaurant.jpg',
          // fit serve para preenchimento da tela, mas só funciona se declarar height ou width
          fit: BoxFit.cover,
          height: 1000.0,
        ),
        Column(
          mainAxisAlignment: MainAxisAlignment.center,
          //Children recebe Multiplos widgets.
          children: [
            Padding(
              padding: const EdgeInsets.all(30.0),
              child: Text(
                "Pessoas: $_people",
                style:
                    TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
              ),
            ),
            Row(
              // Serve para alinhamento do eixo principal de uma coluna ou uma linha
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              //Serve para informar o tamanho do alinhamento
              mainAxisSize: MainAxisSize.min,
              children: [
                FlatButton(
                    // Local onde se coloca a função que vai ser chamada quando o widget for pressionado
                    onPressed: () {
                      _changePeople(1);
                    },
                    highlightColor: Colors.amber,
                    child: Text(
                      "+1",
                      style: TextStyle(color: Colors.white, fontSize: 40),
                    )),
                FlatButton(
                    onPressed: () {
                      _changePeople(-1);
                    },
                    highlightColor: Colors.amber,
                    child: Text(
                      "-1",
                      style: TextStyle(color: Colors.white, fontSize: 40),
                    )),
              ],
            ),
            Text(
              "$_infoText",
              style: TextStyle(
                  color: Colors.white,
                  fontStyle: FontStyle.italic,
                  fontSize: 30),
            ),
          ],
        )
      ],
    );
  }
}
