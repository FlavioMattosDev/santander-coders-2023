const fibonacci = (n, memo = new Map) => {
  if(memo.has(n)) return memo.get(n)
  if(n < 2) return n

  const fib = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
  memo.set(n, fib)

  console.log('n', n)
  console.log(fib)
  return fib
}

fibonacci(10)