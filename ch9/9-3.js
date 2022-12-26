//클래스는 가변성
//여기서 문제는 멤버 함수 하나가 변경될때 다른 멤버 함수도 함께 변경되는 것 -> 각자 독립적으로

// 예제 1
class Order {
  // 다른 코드 있다고 가정
  get discountedTotal() {
    return this._discountedTotal;
  }
  set discount(value) {
    const old = this._discount;
    this._discount = value;
    this._discountedTotal += old - value;
  }
}

// 예제 2
class ProductionPlan {
  // 다른 코드 있다고 가정
  get production() {
    return this._production;
  }
  applyAdjustment(adjustment) {
    this._adjustments.push(adjustment);
    this._production += adjustment.amount;
  }
}
