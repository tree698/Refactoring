// 클래스 추출하기
// 클래스는 가급적 한가지 일만 담당 -> 전화번호 만드는 로직을 추출
class Person {
  #name;
  #telephoneNumber;
  constructor(name, telephone) {
    this.#name = name;
    this.#telephoneNumber = telephone;
  }

  get name() {
    return this.#name;
  }
  set name(arg) {
    this.#name = arg;
  }
  get telephoneNumber() {
    return this.#telephoneNumber.toString;
  }
  get officeAreaCode() {
    return this.#telephoneNumber.officeAreaCode;
  }
  get officeNumber() {
    return this.#telephoneNumber.officeNumber;
  }
}

class TelephoneNumber {
  #officeAreaCode;
  #officeNumber;
  constructor(areaCode, number) {
    this.#officeAreaCode = areaCode;
    this.#officeNumber = number;
  }
  get toString() {
    return `(${this.#officeAreaCode}) ${this.#officeNumber}`;
  }
  get officeAreaCode() {
    return this.#officeAreaCode;
  }

  set officeAreaCode(arg) {
    this.#officeAreaCode = arg;
  }

  get officeNumber() {
    return this.#officeNumber;
  }

  set officeNumber(arg) {
    this.#officeNumber = arg;
  }
}

const person = new Person('엘리', new TelephoneNumber('010', '12345678'));
console.log(person.name);
console.log(person.officeAreaCode);
console.log(person.officeNumber);
console.log(person.telephoneNumber);
