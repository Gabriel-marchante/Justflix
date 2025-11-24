// import 'package:justflix/utils/format_duration.dart';


String formatDuration(double seconds) {
  int minutes = seconds ~/ 60;
  int secs = (seconds % 60).round();
  return '$minutes:${secs.toString().padLeft(2, '0')}';
}