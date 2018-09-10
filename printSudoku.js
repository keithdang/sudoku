const start = arr => {
  let strLine = "";
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      strLine += arr[i][j] + " ";
    }
    console.log(strLine);
    strLine = "";
  }
};
const randomIndices = (value, max) => {
  let map = {};
  let arr = [];
  let count = 0;
  let index;
  while (count < value) {
    index = Math.floor(Math.random() * Math.floor(max));
    if (!map[index]) {
      count++;
      map[index] = true;
      arr.push(index);
    }
  }
  return map;
};
const partial = arr => {
  let strLine = "";

  var indices = randomIndices(2, arr.length * arr[0].length);
  let tmp;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      tmp = j + arr[i].length * i;
      if (indices[tmp]) {
        strLine += arr[i][j] + " ";
      } else {
        strLine += "  ";
      }
    }
    console.log(strLine);
    strLine = "";
  }
};
module.exports = {
  start: start,
  partial: partial
};
