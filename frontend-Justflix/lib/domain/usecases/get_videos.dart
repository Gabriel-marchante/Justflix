
import '../entities/video.dart';
import '../repositories/video_repository.dart';

class GetVideos { // soles demana la llista de videos a '../repositories/video_repository.dart'
  final VideoRepository repository;

  GetVideos(this.repository);

  Future<List<Video>> call() async {
    return await repository.getVideos();
  }
}
