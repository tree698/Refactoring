import { strict as assert } from 'node:assert';

class Customer {
  constructor() {
    this.discountRate = 0;
  }
  applyDiscount(number) {
    assert(number > 0);
    return this.discountRate ? number - this.discountRate * number : number;
  }
}

// 에러 발생
new Customer().applyDiscount(-1);
