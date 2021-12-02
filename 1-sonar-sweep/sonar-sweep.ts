export function sonarSweep(measurements: number[]): number {
  let windowSize = 3;
  let increments = 0;

  let firstMeasurementOfWindow: number;
  let lastMeasurementOfNextWindow: number;
  for (let pos = 0; pos < measurements.length - (windowSize - 1); pos++) {
    firstMeasurementOfWindow = measurements[pos];
    lastMeasurementOfNextWindow = measurements[pos + windowSize];
    if (lastMeasurementOfNextWindow > firstMeasurementOfWindow) increments++;
  }

  return increments;
}
