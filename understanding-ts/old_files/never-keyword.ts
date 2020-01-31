let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Tantan";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("Potato", 42);

function infiniteLoop(): number {
  while (true) {}
  return 1;
}
