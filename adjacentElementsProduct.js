adjacentElementsProduct = array => {
  if(array.length >= 2 && array.length <= 10){
    let max = array[0]*array[1];
    for (var i = 0; i < array.length; i++) {
      if(i+1 === array.length) break;
      if((array[i] * array[i+1]) > max)
        max = array[i] * array[i+1];
    }
    return max;
  }
}
const array = [3, 6, -2, -5, 7, 3];
console.log(adjacentElementsProduct(array));
