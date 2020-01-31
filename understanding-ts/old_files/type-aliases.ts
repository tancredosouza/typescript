type ProgramLanguage =
  | "typescript"
  | "cpp"
  | "assembly"
  | "rust"
  | "scala"
  | "java"
  | "haskell"
  | "c"
  | "matlab"
  | "python"
  | "sql"
  | "hcl"
  | "powerbi";

type User = {
  name: string;
  age: number;
  favoriteProgrammingLanguages: ProgramLanguage[];
};

const me = {
  name: "Tantan",
  age: "22",
  favoriteProgrammingLanguages: ["python", "scala", "typescript"]
};

console.log(me.favoriteProgrammingLanguages);
