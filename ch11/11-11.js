export function ascentVelocity(points, totalMinutes) {
  function calculateAscent() {
    for (let i = 1; i < points.length; i++) {
      const verticalChange = points[i].elevation - points[i - 1].elevation;
      totalAscent += verticalChange > 0 ? verticalChange : 0;
    }
  }

  let totalAscent = 0;
  calculateAscent([{ elevation: 10 }, { elevation: 20 }], 1); // ???? 함수 매개변수 ??

  return totalAscent / totalMinutes;
}

// console.log(ascentVelocity([{ elevation: 10 }, { elevation: 20 }], 1));
