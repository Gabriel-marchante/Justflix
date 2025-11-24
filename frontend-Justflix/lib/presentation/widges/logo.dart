import 'package:flutter/material.dart';



/// Logo, Este es soles el logo de justflix
class Logo extends StatelessWidget implements PreferredSizeWidget {
  const Logo({super.key});

  @override
  Widget build(BuildContext context) {
    return AppBar(
      title: Image.asset('assets/images/justflix.png', height: 40),
    );
  }

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);
}
