let _arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(_arr.slice(0,3));
// console.log(_arr.slice(2));
// console.log(_arr.slice(3));
// console.log(_arr);

// console.log(_arr.splice(1));
// console.log(_arr);

let _arrNew = [];
_arr.forEach((_el, _i) => {
  if(_i % 4 === 0) {
    _arrNew.push(_arr.slice(_i, _i + 4));
  }
});
console.log(_arrNew);