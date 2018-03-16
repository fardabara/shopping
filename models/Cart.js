module.exports = class Cart {
  constructor(oldCart) {
    this.items = oldCart.items || {};
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;
  }

  add(item, id) {
    let stroeItem = this.items[id];
    if(!stroeItem)
      stroeItem = this.items[id] = { item: item, qty: 0, price: 0 };
    stroeItem.qty++;
    stroeItem.price = stroeItem.item.price * stroeItem.qty;
    this.totalQty++;
    this.totalPrice += stroeItem.item.price;
  }

  generateArray() {
    let _arr = [];
    for (let id in this.items) {
      _arr.push(this.items[id]);
    }
    return _arr;
  }
};

