
import 'package:flutter/material.dart';
import 'package:justflix/screens/HomeScreenState.dart';
import 'package:provider/provider.dart';
import 'data/datasources/video_local_data_source.dart';
import 'data/repositories/video_repository_impl.dart';
import 'domain/usecases/get_videos.dart';
import 'presentation/providers/video_provider.dart';


void main() {
  final videoLocalDataSource = VideoLocalDataSourceImpl();
  final videoRepository = VideoRepositoryImpl(localDataSource: videoLocalDataSource);
  final getVideos = GetVideos(videoRepository);

  runApp(
    ChangeNotifierProvider(
      create: (_) => VideoProvider(getVideos: getVideos)..fetchVideos(),
      child: const MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'JustFlix',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const HomeScreen(),
    );
  }
}



// import 'package:flutter/material.dart';
// import 'package:flutter/rendering.dart';
// import 'presentation/screens/home_screen.dart';
// void main() {
//   debugPaintSizeEnabled =
//       false; // Per veure els layouts. Requereix rendering.dart
//   runApp(const MyApp());
// }
// class MyApp extends StatelessWidget {
//   const MyApp({super.key});
//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       title: 'JustFlix',
//       debugShowCheckedModeBanner: false,
//       // Definim el tema de l'aplicacicó. Fem ús de l'esquema de colors Teal
//       theme: ThemeData(useMaterial3: true, colorSchemeSeed: Colors.amberAccent),
//       // Widget principal
//       home: HomeScreen(),
//     );
//   }
// }
