// let stringArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// let numberArr = [1,2,3,4,5,6,7,8,9,10];
//
// console.log(stringArr.includes('h'));
// console.log(numberArr.includes(11));

// const mongoose = require('mongoose');
// let Product = require('../models/Product');
//
// mongoose.connect('mongodb://localhost/shopping');
// mongoose.Promise = global.Promise;
//
//
// let product = () => {
//   return new Promise((resolve, reject) => {
//     Product.find().then(res => {
//       resolve(res);
//     });
//   });
// };
//
// product().then(products => {
//   let items = {};
//   products.forEach(product => {
//     items[product._id] = { name: product.name, price: product.price };
//   });
//   return items;
// }).then(res=>{
//   console.log(res);
// });

// let data = require('./object.json')


// let Cart = require('../models/Cart')
// let cart = new Cart()
// console.log(cart);

// const Cart = require('../models/Cart');
// const myCart = new Cart();
// console.log(myCart.area());
