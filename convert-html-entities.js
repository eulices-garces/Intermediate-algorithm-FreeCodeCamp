function convertHTML(str) {
  let newStr = str.split('')
  let cadena = []

  newStr.forEach ( elem => {
    if (elem === '&') {
      cadena.push('&amp;')
    } else if (elem === '<') {
      cadena.push('&lt;')
    } else if (elem === '>') {
      cadena.push('&gt;')
    } else if (elem === "'") {
      cadena.push('&apos;')
    } else if (elem === '"') {
      cadena.push('&quot;')
    } else {
      cadena.push(elem)
    }
    
  })
  
  console.log(cadena.join(""))
  return cadena.join("");
}

convertHTML("Dolce & Gabbana");