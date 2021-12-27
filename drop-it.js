function dropElements(arr, func) {
  let newArr = arr.findIndex(func)

  console.log(arr.slice(newArr >= 0 ? newArr : arr.length))
  return arr.slice(newArr >= 0 ? newArr : arr.length)
}

dropElements([1, 2, 3], function(n) {return n < 3; });