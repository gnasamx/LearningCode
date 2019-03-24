import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import './services//usermangement.dart';

class SignupPage extends StatefulWidget {
  @override
  _SignupPageState createState() => _SignupPageState();
}

class _SignupPageState extends State<SignupPage> {
  String email;
  String password;

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
        body: Center(
            child: Container(
                padding: EdgeInsets.all(25.0),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    TextField(
                      decoration: InputDecoration(hintText: 'Email'),
                      onChanged: (value) {
                        setState(() {
                          email = value;
                        });
                      },
                    ),
                    SizedBox(
                      height: 15.0,
                    ),
                    TextField(
                      decoration: InputDecoration(hintText: 'Password'),
                      onChanged: (value) {
                        setState(() {
                          password = value;
                        });
                      },
                    ),
                    SizedBox(
                      height: 20.0,
                    ),
                    RaisedButton(
                      child: Text('Signup'),
                      color: Colors.amber,
                      textColor: Colors.white,
                      elevation: 4.0,
                      onPressed: () {
                        FirebaseAuth.instance
                            .createUserWithEmailAndPassword(
                                email: email, password: password)
                            .then((signedInUser) {
                          UserManagement().storeNewUser(signedInUser, context);
                        }).catchError((e) {
                          print(e);
                        });
                      },
                    ),
                    SizedBox(
                      height: 15.0,
                    ),
                    Text('Alredy have an account?'),
                    SizedBox(
                      height: 10.0,
                    ),
                    RaisedButton(
                      child: Text('Login'),
                      color: Colors.teal,
                      textColor: Colors.white,
                      elevation: 4.0,
                      onPressed: () {},
                    )
                  ],
                ))));
  }
}
