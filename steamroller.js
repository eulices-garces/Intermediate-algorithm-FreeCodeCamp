function steamrollArray(arr) {
  let ar = arr
  .join()
  .replace(",,", ",")
  .split(",")

  let other = ar.map((elem) => {
    if (elem == "[object Object]") {
        // bring back empty objects
        return {};
      } else if (isNaN(elem)) {
        // if not a number (string)
        return elem;
      } else {
        return parseInt(elem); // if a number in a string, convert it
      }
  })
  

  console.log(other)
  return other
}

steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([1, {}, [3, [[4]]]]) 
steamrollArray([[["a"]], [["b"]]])
steamrollArray([1, [], [3, [[4]]]])