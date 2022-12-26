class Order {
  constructor(data) {
    //값
    this._number = data.number;
    //불변의 값 -> 고객 id에 따른 정보 업데이트가 필요하므로 참조값으로 전달하여 고객 정보가 업데이트 되도록..
    this._customer = new Customer(data.customerId);
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id, name) {
    this._id = id;
    this._name = name;
  }

  get id() {
    return this._id;
  }
}
