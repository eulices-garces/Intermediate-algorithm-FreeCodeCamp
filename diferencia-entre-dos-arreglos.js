function diffArray(arr1, arr2) {
  const newArr = [];
  
  function comparando (small, large) {
    for(let i = 0; i < large.length;i++) {
      if (small.includes(large[i]) === false) {
        newArr.push(large[i])
      }
    }
  }  
  
  comparando (arr1, arr2)
  comparando (arr2, arr1)

  console.log(newArr)
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);