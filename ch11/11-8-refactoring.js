export class Employee {
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }
  get name() {
    return this._name;
  }

  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }

  static get legalTypeCodes() {
    return { E: 'Engineer', M: 'Manager', S: 'Salesman' };
  }

  static createEmgineer(name) {
    return new Employee(name, 'E');
  }

  static createManager(name) {
    return new Employee(name, 'M');
  }

  static createSaleman(name) {
    return new Employee(name, 'S');
  }
}

const manager = Employee.createManager('Ellie');
console.log(manager.type);
