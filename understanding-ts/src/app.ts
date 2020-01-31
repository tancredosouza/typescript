const add = (a: number, b: number) => {
  return a + b;
};

function applyThreeTimes(
  a: number,
  b: number,
  f: (a: number, b: number) => number
): number {
  return f(a, f(a, f(a, b)));
}

console.log(applyThreeTimes(3, 5, add));

const addCurrying = (n: number) => (a: number) => add(a, n);

console.log(addCurrying(3)(1));

function addWithDefaultValue(a: number, b:number = 3) {
  return a + b;
}

console.log(addWithDefaultValue(5));