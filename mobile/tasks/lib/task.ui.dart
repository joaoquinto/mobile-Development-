import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:tasks/task.controller.dart';

class TaskUi extends StatefulWidget {
  @override
  _TaskUiState createState() => _TaskUiState();
}

class _TaskUiState extends State<TaskUi> {
  Task task = new Task();

  @override
  void initState() {
    super.initState();
    task.readData().then((data) {
      setState(() {
        task.toDoList = json.decode(data);
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Task List"),
        centerTitle: true,
        backgroundColor: Colors.blueAccent,
        elevation: 2.0,
      ),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(17, 1, 7, 1),
            child: Row(
              children: [
                Expanded(
                    child: TextField(
                  controller: task.toDoController,
                  decoration: InputDecoration(labelText: "Nova Tarefa"),
                )),
                Padding(
                  padding: const EdgeInsets.only(top: 2),
                  child: FloatingActionButton(
                    elevation: 0,
                    backgroundColor: Colors.blueAccent,
                    onPressed: () {
                      setState(() {
                        task.addToDo();
                      });
                    },
                    child: Icon(Icons.send),
                  ),
                )
              ],
            ),
          ),
          Expanded(
              child: ListView.builder(
            // Quantidade de itens que a lista vai ter.
            itemCount: task.toDoList.length,
            // Cria elementos da lista
            itemBuilder: (context, index) {
              return CheckboxListTile(
                title: Text(
                  task.toDoList[index]["title"],
                  style: TextStyle(fontSize: 16),
                ),
                onChanged: (c) {
                  setState(() {
                    task.toDoList[index]["ok"] = c;
                    task.saveData();
                  });
                },
                value: task.toDoList[index]["ok"],
                secondary: CircleAvatar(
                  child: Icon(
                      task.toDoList[index]["ok"] ? Icons.check : Icons.error),
                ),
              );
            },
            padding: EdgeInsets.only(top: 10.0),
          )),
        ],
      ),
    );
  }
}
