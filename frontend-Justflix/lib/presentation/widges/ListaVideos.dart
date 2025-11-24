
import 'package:flutter/material.dart';
import 'package:justflix/presentation/providers/video_provider.dart';
import 'package:justflix/utils/format_duration.dart';

import 'package:provider/provider.dart';




/// ListaVideos, este es el llistat de videos per el json
class ListaVideos extends StatelessWidget {
  const ListaVideos({super.key});

  @override
  Widget build(BuildContext context) {
    return Consumer<VideoProvider>(
      builder: (context, provider, child) {
        if (provider.isLoading) {
          return const Center(child: CircularProgressIndicator()); 
                                                                  
        }

        if (provider.videos.isEmpty) {
          return const Center(child: Text('No videos found'));
        }

        return ListView.builder(
          itemCount: provider.videos.length,
          itemBuilder: (context, index) {
            final video = provider.videos[index];
            return ListTile(
              leading: Image.asset('assets/images/${video.thumbnail}',
              width: 100,    // amplària en píxels
              height: 50,   // alçària en píxels
             // fit: BoxFit.cover, // com s’ajusta la imatge (cover, contain, fill, etc.)
              ),
              
              title: Text(video.id),
              subtitle: Text('${formatDuration(video.duration)}m'),
              onTap: () {
                provider.selectVideo(video);
              },
            );
          },
        );
      },
    );
  }
}