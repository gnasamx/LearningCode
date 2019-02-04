import 'package:flutter/material.dart';

class ProductPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Product Deatils'),
      ),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          Image.asset('assets/nature.jpg'),
          Container(padding: EdgeInsets.all(10.0), child: Text("Datails")),
          Container(
              padding: EdgeInsets.all(10.0),
              child: RaisedButton(
                child: Text('Back'),
                onPressed: () => Navigator.pop(context),
              )),
        ],
      ),
    );
  }
}
