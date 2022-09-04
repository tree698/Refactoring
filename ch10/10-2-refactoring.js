// function disabilityAmount(employee) {
//   const result =
//     employee.seniority < 2 ||
//     employee.monthsdisabled > 12 ||
//     employee.isPartTime;
//   return result ? 0 : 1;
// }

function disabilityAmount(employee) {
  return isNotEligibleForDisability(employee) ? 0 : 1;
}

function isNotEligibleForDisability(employee) {
  return (
    employee.seniority < 2 ||
    employee.monthsdisabled > 12 ||
    employee.isPartTime
  );
}
