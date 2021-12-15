function destroyer(arr) {
  let args = [...arguments]
  let firstArgument = args[0]
  let secondArgument = args.slice(1)

  return firstArgument.filter(elem => secondArgument.includes(elem) === false);
  


  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);