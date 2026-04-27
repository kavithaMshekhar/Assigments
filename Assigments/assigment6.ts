 /* Given a number n, determine whether it is a prime number or not. A prime number is a
number greater than 1 that has no positive divisors other than 1 and itself.*/

function isPrime(n: number): boolean {
  // Prime numbers must be greater than 1
  if (n <= 1) {
    return false;
  }

  // Check divisibility from 2 to √n
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false; // divisible → not prime
    }
  }

  return true; // no divisors found → prime
}
console.log(isPrime(7));   // true
console.log(isPrime(25));  // false
console.log(isPrime(1));  //false
