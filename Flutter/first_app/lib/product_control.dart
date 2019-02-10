import 'package:flutter/material.dart';

class ProductControl extends StatelessWidget {
  final Function addProduct;
  ProductControl(this.addProduct);

  @override
  Widget build(BuildContext context) {
    return RaisedButton(
        child: Text('Add Product'),
        onPressed: () {
          addProduct({'title': "Chocolate", 'image': 'assets/nature.jpg'});
        });
  }
}
