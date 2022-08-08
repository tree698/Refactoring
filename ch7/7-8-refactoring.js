class Person {
  #name;
  #manager;
  #chargeCode;
  constructor(name, manager, chargeCode) {
    this.#name = name;
    this.#manager = manager;
    this.#chargeCode = chargeCode;
  }

  get name() {
    return this.#name;
  }
  set name(value) {
    this.#name = value;
  }
  get manager() {
    return this.#manager;
  }
  set manager(value) {
    this.#manager = value;
  }
  get chargeCode() {
    return this.#chargeCode;
  }
  set chargeCode(value) {
    this.#chargeCode = value;
  }
}

const person = new Person('Tom', 'aManager', '999');
console.log(person.name);
console.log(person.manager);
console.log(person.chargeCode);
