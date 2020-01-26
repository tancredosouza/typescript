enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

const person = {
  name: "Tantan",
  age: "22",
  hobbies: ["Singing", "Climbing", "Typescript"],
  role: Role.ADMIN
};

console.log(person.hobbies);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

let number: [number, string, number];
number = [10, "a", 5];

if (person.role === Role.ADMIN) {
  console.log("It's an admin!");
}
