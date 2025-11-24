
import '../../domain/entities/video.dart';
import '../../domain/repositories/video_repository.dart';
import '../datasources/video_local_data_source.dart';

//Este es el arxiu a tocar cuan tinguem la Api
class VideoRepositoryImpl implements VideoRepository { 
  final VideoLocalDataSource localDataSource;

  VideoRepositoryImpl({required this.localDataSource});

  @override
  Future<List<Video>> getVideos() async {
    return await localDataSource.getVideos();
  }
}
