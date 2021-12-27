function myReplace(str, before, after) {

  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    console.log(str.replace(before, (after.charAt(0).toUpperCase() + after.slice(1))))
    return str.replace(before, (after.charAt(0).toUpperCase() + after.slice(1)))
  } else if (before.charAt(0) != before.charAt(0).toUpperCase() && after.charAt(0) === after.charAt(0).toUpperCase()) {
    return str.replace(before, (after.toLowerCase()))
  }
  console.log(str.replace(before, after))
  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped");