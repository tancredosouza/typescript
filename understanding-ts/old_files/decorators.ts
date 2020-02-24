function Logger(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function(originalConstructor: any) {
    return class extends originalConstructor {
      constructor() {
        super();
        const hookEl = document.getElementById(hookId);

        if (hookEl) {
          hookEl.innerHTML = template;
        }
      }
    };
  };
}

@WithTemplate("<h1>My person object</h1>", "app")
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();

function PropertyLogger(target: any, propertyName: string | Symbol) {
  console.log("Property decorator");
  console.log(target, propertyName);
}

function AccessorLogger(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log("Accessor decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function MethodLogger(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function ParameterLogger(
  target: any,
  methodName: string | Symbol,
  position: number
) {
  console.log("Parameter decorator!");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @PropertyLogger // executes when class get created in javascript (no need to instantiate)
  title: string;
  private _price: number;

  @AccessorLogger
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw Error("invalid price - should be positive.");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @MethodLogger
  getPriceWithTax(@ParameterLogger taxRate: number) {
    return this._price * (1 + taxRate);
  }
}
