type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

type Combinable = string | number;
type Numerical = number | boolean;

type Universal = Combinable | Numerical;

// function overload
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  // type guard using typeof
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

// ------------

type UnkwnownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnkwnownEmployee) {
  console.log("Name: " + emp.name);

  // another type guard. not using typeof
  // for classes, you can use 'instanceof' - more elegant
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }

  if ("startDate" in emp) {
    console.log("Start date: " + emp.startDate);
  }
}

printEmployeeInfo({ name: "a", startDate: new Date() });

interface Bird {
  type: "bird"; // type guard using LITERAL types
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }

  console.log("Moving at speed " + speed);
}

// this is type casting
const userInputElement = document.getElementById("something");

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "hi";
}

// this is Index Types
interface ErrorContainer {
  [property: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with a capital character"
};

// -------- optional chaining
const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My own company" } // this could not exist
};

console.log(fetchedUserData?.job.title);
