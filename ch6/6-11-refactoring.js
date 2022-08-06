// below is my refactoring... so, need to check the best answer!

export class DataForProduct {
  #basePrice;
  #discountRate;
  #discountThreshold;
  constructor(data) {
    this.#basePrice = data.basePrice;
    this.#discountRate = data.discountRate;
    this.#discountThreshold = data.discountThreshold;
  }
  get basePrice() {
    return this.#basePrice;
  }
  get discountRate() {
    return this.#discountRate;
  }
  get discountThreshold() {
    return this.#discountThreshold;
  }
}

export class DataForShippingMethod {
  #discountThreshold;
  #feePerCase;
  #discountedFee;
  constructor(data) {
    this.#discountThreshold = data.discountThreshold;
    this.#feePerCase = data.feePerCase;
    this.#discountedFee = data.discountedFee;
  }
  get discountThreshold() {
    return this.#discountThreshold;
  }
  get feePerCase() {
    return this.#feePerCase;
  }
  get discountedFee() {
    return this.#discountedFee;
  }
}

export function priceOrder(quantity, product, shippingMethod) {
  const basePrice = calculateBasePrice(quantity, product);
  const discount = calculateDiscount(quantity, product);
  const shippingCost = calculateShippingCost(quantity, product, shippingMethod);
  return basePrice - discount + shippingCost;
}

export function calculateBasePrice(quantity, product) {
  return product.basePrice * quantity;
}

export function calculateDiscount(quantity, product) {
  return (
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate
  );
}

export function calculateShippingCost(quantity, product, shippingMethod) {
  const shippingPerCase = calculateShippingPerCase(
    quantity,
    product,
    shippingMethod
  );
  return quantity * shippingPerCase;
}

export function calculateShippingPerCase(quantity, product, shippingMethod) {
  const basePrice = calculateBasePrice(quantity, product);
  return basePrice > shippingMethod.discountThreshold
    ? shippingMethod.discountedFee
    : shippingMethod.feePerCase;
}

//사용

const product = new DataForProduct({
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
});
const shippingMethod = new DataForShippingMethod({
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
});

const price = priceOrder(5, product, shippingMethod);
console.log(price);
