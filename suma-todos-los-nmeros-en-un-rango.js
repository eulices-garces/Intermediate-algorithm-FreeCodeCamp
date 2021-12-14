function sumAll(arr) {
  let newArr = arr.slice().sort((a, b) => a-b)
  let otherArr = []
  for (let i = newArr[0]; i <= newArr[1]; i++) {
    otherArr.push(i)
  }
  let sum = otherArr.reduce((a, b) => a + b, 0)

  return sum

  //console.log(suma)
  //console.log(arrayFinal)
}

sumAll([1, 4]);