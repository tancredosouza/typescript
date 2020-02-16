interface Greetable {
  greet(s: string): string;
}

interface Named {
  readonly name?: string;
  outputName?: string;
}

class Person implements Named {
  name?: string;

  constructor(n?: string) {
    if (n) this.name = n;
  }
}

let p = new Person();
