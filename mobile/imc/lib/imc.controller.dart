import 'package:flutter/material.dart';

class ImcClass {
  TextEditingController weightController = TextEditingController();
  TextEditingController heightController = TextEditingController();
  String _infoText = "Informe seus dados";

  GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  GlobalKey get formKey => _formKey;

  String get infoText => _infoText;

  String set(String infoText) => _infoText = infoText;

  void validateInputs() {
    if (_formKey.currentState.validate()) {
      calculate();
    }
  }

  void resetFields() {
    weightController.text = "";
    heightController.text = "";
    _infoText = "Informe seus dados";
    _formKey = GlobalKey<FormState>();
  }

  void calculate() {
    double weight = double.parse(weightController.text);
    double height = double.parse(heightController.text) / 100;
    double imc = weight / (height * height);
    print(imc);
    if (imc < 18.5)
      _infoText = "Abaixo do peso com o IMC  ${imc.toStringAsFixed(1)} ";
    else if (imc == 18.5 || imc <= 24.9)
      _infoText = "Peso normal com o IMC ${imc.toStringAsFixed(1)}";
    else if (imc == 25.0 || imc <= 29.9)
      _infoText = "Sobrepeso com o IMC ${imc.toStringAsFixed(1)}";
    else if (imc == 30.0 || imc <= 34.9)
      _infoText = "Obesidade grau 1 com o IMC ${imc.toStringAsFixed(1)}";
    else if (imc == 35.0 || imc <= 39.9) {
      _infoText = "Obesidade grau 2 com o IMC ${imc.toStringAsFixed(1)} ";
    } else if (imc > 40.0)
      _infoText = "Obesidade grau 3 com o IMC ${imc.toStringAsFixed(1)} ";
  }
}
