function sumPrimes(num) {
 let primes = [];
  for (let i = 2; i <= num; i++) {
    if (primes.every((prime) => i % prime !== 0))
      primes.push(i);
  }

  return primes.reduce((a, b) => a + b, 0);
}
sumPrimes(10);