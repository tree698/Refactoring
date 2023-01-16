import { strict as assert } from 'node:assert';

class Customer {
  constructor(discountRate) {
    this.discountRate = discountRate;
  }
  applyDiscount(number) {
    assert(number > 0);
    return this.discountRate > 1 ? number - this.discountRate * number : number;
  }
}

// 에러 발생
console.log(new Customer(1).applyDiscount(2));
