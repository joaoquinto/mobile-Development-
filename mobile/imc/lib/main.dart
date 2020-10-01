import 'package:flutter/material.dart';
import 'package:imc/imc.dart';
import 'package:splashscreen/splashscreen.dart';

void main() {
  runApp(MaterialApp(
    title: 'Controlador de IMC',
    home: Home(),
    color: Colors.green,
    debugShowCheckedModeBanner: false,
    theme: ThemeData(hintColor: Colors.green, primaryColor: Colors.green),
  ));
}

class Home extends StatelessWidget {
  final asset = "img/imc.png";

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: SplashScreen(
          navigateAfterSeconds: Imc(),
          seconds: 5,
          image: Image.asset(asset),
          photoSize: 100,
          backgroundColor: Colors.green,
          loaderColor: Colors.white,
          loadingText: Text("Por favor aguarde um momento..."),
        ),
      ),
      theme: ThemeData(hintColor: Colors.green, primaryColor: Colors.green),
    );
  }
}
