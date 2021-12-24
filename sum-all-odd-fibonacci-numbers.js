

function sumFibs(num) {
  let total = 0
  let first = 0
  let second = 1

  while (second <= num) {
    if (second % 2 !== 0) {
      total += second;
    }
    second += first;
    first = second - first;
  }
  return total
}

sumFibs(4);