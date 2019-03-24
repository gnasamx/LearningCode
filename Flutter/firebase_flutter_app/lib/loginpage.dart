import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:google_sign_in/google_sign_in.dart';

class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  String email;
  String password;

  GoogleSignIn googleSignIn = new GoogleSignIn();

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
                      child: Text('Login'),
                      color: Colors.amber,
                      textColor: Colors.white,
                      elevation: 4.0,
                      onPressed: () {
                        FirebaseAuth.instance
                            .signInWithEmailAndPassword(
                                email: email, password: password)
                            .then((FirebaseUser user) {
                          Navigator.of(context)
                              .pushReplacementNamed('/homepage');
                        }).catchError((e) {
                          print(e);
                        });
                      },
                    ),
                    SizedBox(
                      height: 15.0,
                    ),
                    RaisedButton(
                      child: Text('Login with Google'),
                      color: Colors.amber,
                      textColor: Colors.white,
                      elevation: 4.0,
                      onPressed: () async {
                          GoogleSignInAccount googleUser =
                              await googleSignIn.signIn();
                          GoogleSignInAuthentication googleAuth =
                              await googleUser.authentication;
                          final AuthCredential credential =
                              GoogleAuthProvider.getCredential(
                            accessToken: googleAuth.accessToken,
                            idToken: googleAuth.idToken,
                          );
                          final FirebaseUser user = await FirebaseAuth.instance
                              .signInWithCredential(credential);
                          print("signed in " + user.displayName);
                          Navigator.of(context)
                              .pushReplacementNamed('/homepage');
                        
                      },
                    ),
                    SizedBox(
                      height: 15.0,
                    ),
                    Text('Don\'t have an account?'),
                    SizedBox(
                      height: 10.0,
                    ),
                    RaisedButton(
                      child: Text('Sign Up'),
                      color: Colors.teal,
                      textColor: Colors.white,
                      elevation: 4.0,
                      onPressed: () {
                        Navigator.of(context).pushNamed('/signup');
                      },
                    )
                  ],
                ))));
  }
}
