// 예제 1
function getTotalOutstanding() {
  return customer.invoices.reduce((total, each) => total + each.amount, 0);
}

function sendBill() {
  // ...
}

// 예제 2
export function alertForMiscreant(people, alarm) {
  const miscreant = findMiscreant(people);
  setOffAlarms(alarm, miscreant);
}

function findMiscreant(people) {
  for (const p of people) {
    if (p === 'Don') {
      return 'Don';
    }
    if (p === 'John') {
      return 'John';
    }
  }
}

function setOffAlarms(alarm, p) {
  alarm.setOff('Found Miscreant ' + p);
}
