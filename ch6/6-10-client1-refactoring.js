import { acquireReading, enrichReading } from './6-10-refactoring.js';

const rawReading = acquireReading();
const reading = enrichReading(rawReading);

console.log(reading.basecharge);
