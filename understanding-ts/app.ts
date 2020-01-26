function add(n1: number, n2: number): number {
  return n1 + n2;
}

function addWithCallback(
  n1: number,
  n2: number,
  callback: (n: number) => number
) {
  const result = n1 + n2;
  const resultSuccessor = callback(result);

  return resultSuccessor;
}

console.log(
  addWithCallback(10, 20, (n: number) => {
    console.log(n);
    return n + 1;
  })
);
