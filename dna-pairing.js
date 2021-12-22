function pairElement(str) {
 let arr = []
 let otherArr = str.split("").map(function (elem) {
   if (elem === 'G') {
     arr.push(['G', 'C'])
   } else if (elem === 'C') {
     arr.push(['C', 'G'])
   } else if (elem === 'A') {
     arr.push(['A', 'T'])
   } else if (elem === 'T') {
     arr.push(['T', 'A'])
   }
 })

  console.log(arr)
  console.log(otherArr)
  return arr;
}

pairElement("GCG");