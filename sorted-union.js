function uniteUnique(...arr) {
  let arrr = []
  let newArr = arr.forEach(elem => {
    elem.forEach((other) => {
    if (arrr.indexOf(other) === -1) {
      arrr.push(other)
    }
    //console.log(other)

    //newArr.indexOf(other) === -1
  })
  

  })
  console.log(arrr)
  return arrr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);