function combine(
  firstVal: number | string,
  secondVal: number | string,
  resultType: "as-number" | "as-string"
) {
  let result;

  if (
    (typeof firstVal == "number" && typeof secondVal == "number") ||
    resultType === "as-number"
  ) {
    result = +firstVal + +secondVal;
  } else {
    result = firstVal.toString() + secondVal.toString();
  }

  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedNames = combine("Max", "Anna", "as-string");
console.log(combinedNames);
