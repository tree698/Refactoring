class Customer {
  constructor(discountRate) {
    this.discountRate = discountRate;
  }
  applyDiscount(number) {
    return this.discountRate > 1 ? number - this.discountRate * number : number;
  }
}
