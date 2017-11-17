makeArrayConsecutive2 = statues => {
  statues.sort();
  let additionals = 0;
  if(statues.length === 1) return 0;
  statues.forEach((element, index) => {
    console.log(element, statues[index+1]-1);
    if((element !== (statues[index+1]-1))){
      additionals++;
    }
  });
  return additionals
}

console.log(makeArrayConsecutive2([5, 4, 6]));
