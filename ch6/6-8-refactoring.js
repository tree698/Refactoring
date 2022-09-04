const station = {
  name: 'ZB1',
  readings: [
    { temp: 47, time: '2016-11-10 09:10' },
    { temp: 53, time: '2016-11-10 09:20' },
    { temp: 58, time: '2016-11-10 09:30' },
    { temp: 53, time: '2016-11-10 09:40' },
    { temp: 51, time: '2016-11-10 09:50' },
  ],
};

const operationPlan = {
  temperatureFloor: 51,
  temperatureCeiling: 53,
};

// refactoring 1.
// export function readingsOutsideRange1(readings, range) {
//   return readings.filter(
//     (r) => r.temp < range.temperatureFloor || r.temp > range.temperatureCeiling
//   );
// }

// const result1 = readingsOutsideRange1(station.readings, operationPlan);
// console.log(result1);

// refactoring 2.

export class Range {
  #min;
  #max;
  constructor(min, max) {
    this.#min = min;
    this.#max = max;
  }
  get Max() {
    return this.#max;
  }

  get Min() {
    return this.#min;
  }

  contain(value) {
    return value <= this.#max && value >= this.#min;
  }
}

export function readingsOutsideRange2(station, range) {
  return station.readings.filter((r) => !range.contain(r.temp));
}

const operationPlan2 = new Range(51, 53);
const result2 = readingsOutsideRange2(station, operationPlan2);
console.log(result2);
