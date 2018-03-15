const mongoose = require('mongoose');
let Product = require('../models/product');
mongoose.connect('mongodb://localhost/shopping');

let products = [
  new Product({
    imagePath: 'http://placehold.it/300x300',
    name: 'First Lorem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolorum excepturi facilis fuga illo, in inventore itaque nesciunt nobis omnis provident quam qui rerum sapiente sint sit, tempore totam, voluptas!',
    price: 1000
  }),
  new Product({
    imagePath: 'http://placehold.it/300x300',
    name: 'Second Lorem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolorum excepturi facilis fuga illo, in inventore itaque nesciunt nobis omnis provident quam qui rerum sapiente sint sit, tempore totam, voluptas!',
    price: 2000
  }),
  new Product({
    imagePath: 'http://placehold.it/300x300',
    name: 'Third Lorem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolorum excepturi facilis fuga illo, in inventore itaque nesciunt nobis omnis provident quam qui rerum sapiente sint sit, tempore totam, voluptas!',
    price: 3000
  }),
  new Product({
    imagePath: 'http://placehold.it/300x300',
    name: 'Four Lorem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolorum excepturi facilis fuga illo, in inventore itaque nesciunt nobis omnis provident quam qui rerum sapiente sint sit, tempore totam, voluptas!',
    price: 4000
  }),
  new Product({
    imagePath: 'http://placehold.it/300x300',
    name: 'Five Lorem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolorum excepturi facilis fuga illo, in inventore itaque nesciunt nobis omnis provident quam qui rerum sapiente sint sit, tempore totam, voluptas!',
    price: 5000
  }),
];

let done = 0;
for (let i = 0; i < products.length; i++) {
  products[i].save().then(res => {
    done++;
    if(done === products.length) {
      exit();
    }
  });

}

function exit() {
  mongoose.disconnect();
  console.log("product seeder successful!");
}
