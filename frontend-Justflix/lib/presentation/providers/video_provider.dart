
import 'package:flutter/material.dart';
import '../../domain/entities/video.dart';
import '../../domain/usecases/get_videos.dart';

class VideoProvider extends ChangeNotifier { // ChangeNotifier es pa que notifique als widgets quan hi han canvis
  final GetVideos getVideos;
  List<Video> _videos = []; //aço sera la llista del videos
  bool _isLoading = false; // Este es pa saber cuan algo esta carregan false es que no esta

  Video? _selectedVideo;

  VideoProvider({required this.getVideos});

  List<Video> get videos => _videos; 
  bool get isLoading => _isLoading;
  Video? get selectedVideo => _selectedVideo;

  void selectVideo(Video video) {  // per al VideoSelect, guarda un objecte video que sera el que mostrarem
    _selectedVideo = video; 
    notifyListeners();
  }

  Future<void> fetchVideos() async { // el fetchVideos() es el que carrega el json
    print('Probar a carregar videos');
    _isLoading = true;
    notifyListeners();
    try {
      _videos = await getVideos(); // Aci tens la dirrecció domain/usecases/get_videos
      print('Videos carregats correctament: ${_videos.length} videos');
    } catch (e) {
      print('Error de carrega de video: $e');
    }
    _isLoading = false;
    notifyListeners(); // Sense este el CircularProgressIndicator (es diu spinner), no desapareix mai
    print('Sa acabat la carrega.');
  }
}
