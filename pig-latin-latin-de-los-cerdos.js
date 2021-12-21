function translatePigLatin(str) {

  let arr = str.slice().split("")
  let cons = ""
  let newStr = '' 

  if (/^[qwrtyplkjhgfdszxcvbnm]+/gi.test(str)) {
    cons = str.match(/^[qwrtyplkjhgfdszxcvbnm]+/gi)
    console.log(cons)
  }

  if (cons != "") {
    let num = cons.join().split('').length
    arr.push(arr.splice(0 , num))
    arr.push('a', 'y') 
  } else {
    arr.push('w', 'a', 'y')
  }
  //arr = arr.join()
  newStr = arr.join()

  console.log(newStr.replace(/,/g, ""))
  return newStr.replace(/,/g, "")
  
  return newStr;
}

translatePigLatin("glove");