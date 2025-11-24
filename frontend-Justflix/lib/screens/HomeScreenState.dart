
import 'package:flutter/material.dart';
import 'package:justflix/presentation/widges/ListaVideos.dart';
import 'package:justflix/presentation/widges/VideoSelect.dart';
import 'package:justflix/presentation/widges/logo.dart';



class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}


class _HomeScreenState extends State<HomeScreen> {
  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      appBar: Logo(),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          VideoSelect(),
          Padding(
            padding: EdgeInsets.all(8.0),
            // child: Text(
            //   'Introducción a Flutter',
            //   style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            // ),
          ),
          Expanded(
            child: ListaVideos(),
          ),
        ],
      ),
    );
  }
}