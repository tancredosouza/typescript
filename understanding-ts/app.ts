function combine(firstVal: number | string, secondVal: number | string) {
  let result;

  if (typeof firstVal == "number" && typeof secondVal == "number") {
    result = firstVal + secondVal;
  } else {
    result = firstVal.toString() + secondVal.toString();
  }

  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine("Max", "Anna");
console.log(combinedNames);
