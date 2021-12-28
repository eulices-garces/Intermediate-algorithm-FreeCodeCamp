function addTogether(...arg) {
  const [a, b] = arguments
  if (typeof(a) !== 'number') {
    return undefined
  } else if (b === undefined) {
    return (b) => addTogether(a, b);
  } if (typeof(b) !== "number"){
    return undefined;
  }
  return a + b;
}
  

addTogether(2,3);