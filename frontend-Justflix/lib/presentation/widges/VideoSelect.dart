

import 'package:flutter/material.dart';
import 'package:justflix/presentation/providers/video_provider.dart';
import 'package:justflix/utils/format_duration.dart';
import 'package:provider/provider.dart';



/// VideoSelect, Este es el del video seleccionat

class VideoSelect extends StatelessWidget {
  const VideoSelect({super.key});

  @override
  Widget build(BuildContext context) {
    return Consumer<VideoProvider>(
      builder: (context, provider, child) {
        final selectedVideo = provider.selectedVideo;

        if (selectedVideo == null) {
          //return Image.asset('assets/images/justflix.png', height: 40);
          return Image.asset('assets/images/proba.png', height: 200, width: 400);
        }


        return Column(
          children: [
            // Image.file(File(selectedVideo.thumbnail)),
            Image.asset('assets/images/${selectedVideo.thumbnail}',
             height: 200,
             width: 400),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                 // Text('ID: ${selectedVideo.thumbnail}', style: const TextStyle(fontWeight: FontWeight.bold)),
                  Text('Topic: ${selectedVideo.topic}'),
                  Text('Description: ${selectedVideo.description}'),
                  Text('Duration: ${formatDuration(selectedVideo.duration)}m'),
                  Text('\n${selectedVideo.id}', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
                ],
              )
            ),
          ],
        );
      },
    );
  }
}