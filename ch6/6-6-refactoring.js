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

//...을 통해 복사한 객체를 전달함으로써 불변성 유지
// 하지만, ...은 얉은 복사를 하기에 중첩된 객체가 있다면 변경될 소지가 있음
// export function getDefaultOwner() {
//   return {...defaultOwner};
// }
