// export function adjustedCapital(instrument) {
//   if (instrument.capital <= 0) {
//     return 0;
//   }
//   if (instrument.interestRate > 0 && instrument.duration > 0) {
//     return (
//       (instrument.income / instrument.duration) * anInstrument.adjustmentFactor
//     );
//   }
// }

export function adjustedCapital(instrument) {
  if (!isEligibleForAdjudtedCapital(instrument)) {
    return 0;
  }
  return (
    (instrument.income / instrument.duration) * anInstrument.adjustmentFactor
  );
}

function isEligibleForAdjudtedCapital(instrument) {
  return (
    instrument.capital > 0 &&
    instrument.interestRate > 0 &&
    instrument.duration > 0
  );
}
