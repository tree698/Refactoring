export function rating(drive) {
  return drive.numberOfLateDeliveries > 5 ? 2 : 1;
}

function reportLines(customer) {
  const lines = [];
  lines.push(['name', customer.name]);
  lines.push(['location', customer.location]);
  return lines;
}
