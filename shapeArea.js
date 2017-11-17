shapeArea = n => {
  if(n === 1)
    return 1;
  else{
    return shapeArea(n-1) + 4 * (n-1);
  }
}

console.log(shapeArea(4))
