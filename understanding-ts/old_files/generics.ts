// const names: Array<string> = ["olar"];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

function merge<T extends object, U extends object>(first: T, second: U) {
  return Object.assign(first, second);
}

const mergedObjects = merge({ name: "max" }, { name: "tan" });
console.log(mergedObjects.name);

// const otherMergedObjects = merge<string, number>("aaa", 10);
// console.log(otherMergedObjects);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";

  if (element.length >= 1) {
    descriptionText = "Got " + element.length + " elements.";
  }

  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));
