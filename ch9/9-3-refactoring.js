// 예제 1
class Order {
  get discountedTotal() {
    return this._basePrice - this._discount;
  }
  set discount(value) {
    this._discount = value;
  }
}

// 예제 2
class ProductionPlan {
  get production() {
    return this._adjustments.reduce((sum, a) => sum + a, 0);
  }

  applyAdjustment(adjustment) {
    this._adjustments.push(adjustment);
  }
}
