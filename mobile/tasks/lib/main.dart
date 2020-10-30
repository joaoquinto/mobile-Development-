import 'package:flutter/material.dart';
import 'package:splashscreen/splashscreen.dart';
import 'package:tasks/task.ui.dart';
import 'package:tasks/task.controller.dart';

void main() {
  runApp(MaterialApp(
    home: Splash(),
    debugShowCheckedModeBanner: false,
  ));
}

class Splash extends StatefulWidget {
  @override
  _SplashState createState() => _SplashState();
}

class _SplashState extends State<Splash> {
  Task task = new Task();

  @override
  Widget build(BuildContext context) {
    return SplashScreen(
      seconds: 3,
      backgroundColor: Colors.blue,
      image: Image.asset(
        "lib/img/tasklist.png",
      ),
      photoSize: 150,
      loaderColor: Colors.white,
      loadingText: Text("Aguarde um momento..."),
      navigateAfterSeconds: TaskUi(),
    );
  }
}
