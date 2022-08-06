class Person {
  #firstName;
  #lastName;
  constructor(name) {
    this.#firstName = name.firstName;
    this.#lastName = name.lastName;
  }

  get firstName() {
    return this.#firstName;
  }
  get lastName() {
    return this.#lastName;
  }
}

const defaultOwner = new Person({ firstName: '마틴', lastName: '파울러' });

export function getDefaultOwner() {
  return defaultOwner;
}
