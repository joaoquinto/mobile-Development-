// Para poder utilizar o File
import 'dart:convert';
import 'dart:io';

// Para ler arquivos e para encontrar locais comumente usados ​​no sistema de arquivos.
import 'package:flutter/cupertino.dart';
import 'package:path_provider/path_provider.dart';

class Task {
  TextEditingController toDoController = TextEditingController();

  // Armazena as tarefas
  List _toDoList = [];

  List get toDoList {
    return _toDoList;
  }

// O error era na forma do this.toDoList

/*
ERRADO
  set toDoList(List toDoList) {
    this._toDoList = _toDoList;
  }
  */
  set toDoList(List toDoList) {
    this._toDoList = toDoList;
  }

  /* 
    * Pega o caminho do diretório do dispositivo
    * retorna o arquivo que irá ser usado para salvar.
  */
/*   Future<File> getFile() async {
    // Obtem o diretório do local de armazenamento, independente de ser ios ou android.
    final directory = await getApplicationDocumentsDirectory();
    // Retorna o arquivo e especifica o caminho dele, com o atributo path
    return File('{$directory.path}/data.json');
  } */

  Future<String> get localPath async {
    final directory = await getApplicationDocumentsDirectory();
    return directory.path;
  }

  Future<File> get localFile async {
    final path = await localPath;
    return File('$path/data.json');
  }

// Ler dados do arquivo
  Future<String> readData() async {
    try {
      // Pega o arquivo no diretório
      final file = await localFile;
      // Retorna ele e usa o readAsString para tentar ler ele.
      return file.readAsString();
    } catch (e) {
      return null;
    }
  }

  /* 
  * Converte a lista em um json
  * E redireciona ela para o diretório de armazenamento.
  */
  Future<File> saveData() async {
    // Transforma a List em um json e armazena em data.
    String data = json.encode(toDoList);
    // Informa onde salvar
    final file = await localFile;

    print(toDoList);

    print(file);

    // envia o json para o diretório de salvamento
    return file.writeAsString(data);
  }

  void addToDo() {
    Map<String, dynamic> newToDo = Map();
    // Recebe o texto digitado no textfield
    newToDo["title"] = toDoController.text;
    // apaga o texto assim que enviado
    toDoController.text = "";
    newToDo["ok"] = false;
    toDoList.add(newToDo);
    saveData();
  }
}
