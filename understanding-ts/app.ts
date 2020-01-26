const person = {
  name: "Tantan",
  age: "22",
  hobbies: ["Singing", "Climbing", "Typescript"]
};

console.log(person.hobbies);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

let number: [number, string, number];
number = [10, "a", 5];
