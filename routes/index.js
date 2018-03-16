let express = require('express');
let router = express.Router();
let Product = require('../models/Product');
let Cart = require('../models/Cart');
/* GET home page. */
router.get('/', function (req, res, next) {
  Product.find().then(docs => {
    let _chunkArr = [];
    for (let i = 0; i < docs.length; i += 3) {
      _chunkArr.push(docs.slice(i, i + 3));
    }
    res.render('shop/index', {
      products: _chunkArr
    });
  });
});

router.get('/add-to-card/:id', function (req, res) {
  let productId = req.params.id;
  let cart = new Cart(req.session.cart ? req.session.cart : {});
  Product.findById(productId).then(product => {
    cart.add(product, product.id);
    req.session.cart = cart;
    res.redirect('/');
    console.log(req.session.cart);
  }).catch(err => {
    console.log(err);
  });
});

module.exports = router;
