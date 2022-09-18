class Employee {
  #name;
  constructor(name) {
    this.#name = name;
  }

  get type() {
    return 'employee';
  }

  toString() {
    return `${this.#name} (${this.type})`;
  }
}

class Engineer extends Employee {
  //   constructor(name) {
  //     super(name);
  //   }

  get type() {
    return 'engineer';
  }
}

const ellie = new Engineer('엘리');
console.log(ellie.toString());
