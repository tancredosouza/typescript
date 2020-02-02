function add(a: number, b: number) {
  return a + b;
}

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

function addWithDefaultValue(a: number, b: number = 3) {
  return a + b;
}

console.log(addWithDefaultValue(5));

const person = {
  name: "Tantan",
  age: 22
};

const otherPerson = { ...person };

function addMultipleNumbers(...numbers: number[]) {
  const otherResult = myReduce(add, numbers);

  return otherResult;
}

console.log(addMultipleNumbers(3, 7, 1, 2));

function myReduce(
  callback: (a: number, b: number) => number,
  numbers: number[]
): number {
  if (numbers.length == 0) {
    return 0;
  } else {
    const [head, ...tail] = numbers;

    return callback(head, myReduce(callback, tail));
  }
}
