let express = require('express');
let router = express.Router();
let Product = require('../models/Product');

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
module.exports = router;
