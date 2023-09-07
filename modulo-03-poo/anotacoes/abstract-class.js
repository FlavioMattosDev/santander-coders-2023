class AbstractClass {
  constructor() {
    if (new.target === AbstractClass) {
      throw new Error("Cannot instantiate abstract class");
    }
  }

  abstractMethod() {
    throw new Error("Abstract method must be overridden");
  }
}

class ConcreteClass extends AbstractClass {
  concreteMethod() {
    console.log("ConcreteClass implementation of concreteMethod");
  }

  abstractMethod() {
    console.log("ConcreteClass implementation of abstractMethod");
  }
}

const instance = new ConcreteClass();
instance.concreteMethod(); // Saída: "ConcreteClass implementation of concreteMethod"
instance.abstractMethod(); // Saída: "ConcreteClass implementation of abstractMethod"