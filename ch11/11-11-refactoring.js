export function ascentVelocity(points, totalMinutes) {
  function calculateAscent() {
    let result;
    for (let i = 1; i < points.length; i++) {
      const verticalChange = points[i].elevation - points[i - 1].elevation;
      result += verticalChange > 0 ? verticalChange : 0;
    }
    return result;
  }

  let totalAscent = calculateAscent();

  return totalAscent / totalMinutes;
}
