// function calculateCharge(date, quantity, plan) {
//   const condition =
//     date.isBefore(plan.summerStart) || date.isAfter(plan.summerEnd);
//   const summerCharge = quantity * plan.summerRate;
//   const regularCharge = quantity * plan.regularRate + plan.regularServiceCharge;
//   return condition ? summerCharge : regularCharge;
// }

function calculateCharge(date, quantity, plan) {
  return isSummer ? summerCharge : regularCharge;

  function isSummer() {
    return !date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd);
  }

  function summerCharge() {
    return quantity * plan.summerRate;
  }

  function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
  }
}
