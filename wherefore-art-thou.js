function whatIsInAName(collection, source) {

  let llaves = Object.keys(source);

  let newArr = collection.filter(function(obj) {
    return llaves.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });

console.log(newArr)
return newArr

}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });