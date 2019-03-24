import 'package:flutter/material.dart';
import 'loginpage.dart';
import 'signuppage.dart';
import 'homepage.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(home: LoginPage(),
    
    routes: <String, WidgetBuilder>{
      '/landingpage': (BuildContext context) => new MyApp(),
      '/signup': (BuildContext context) => new SignupPage(),
      '/homepage': (BuildContext context) => new HomePage()
    },);
  }
}
