import * as fs from 'fs';

export function binaryDiagnostics(): number {
  let file = fs.readFileSync('./src/input.txt', 'utf-8');
  let binaryNumbers = file.split('\n');

  let oxygenRating = parseInt(computeOxygenRating(binaryNumbers), 2);
  let scrubberRating = parseInt(computeScrubberRating(binaryNumbers), 2);

  let lifeSupportRating = oxygenRating * scrubberRating;
  return lifeSupportRating;
}

function computeOxygenRating(binaryNumbers: string[]): string {
  let oxygenRating = '';

  for (let column = 0; column < binaryNumbers[0].length; column++) {
    let binaryNumbersWithOne: string[] = [];
    let binaryNumbersWithZero: string[] = [];

    binaryNumbers.forEach((binaryNumber: string) => {
      if (binaryNumber[column] == '0') binaryNumbersWithZero.push(binaryNumber);
      else binaryNumbersWithOne.push(binaryNumber);
    });

    if (binaryNumbersWithOne.length >= binaryNumbersWithZero.length)
      binaryNumbers = binaryNumbersWithOne;
    else binaryNumbers = binaryNumbersWithZero;

    if (binaryNumbers.length == 1) break;
  }
  oxygenRating = binaryNumbers[0];

  return oxygenRating;
}

function computeScrubberRating(binaryNumbers: string[]): string {
  let scrubberRating = '';

  for (let column = 0; column < binaryNumbers[0].length; column++) {
    let binaryNumbersWithOne: string[] = [];
    let binaryNumbersWithZero: string[] = [];

    binaryNumbers.forEach((binaryNumber: string) => {
      if (binaryNumber[column] == '0') binaryNumbersWithZero.push(binaryNumber);
      else binaryNumbersWithOne.push(binaryNumber);
    });

    if (binaryNumbersWithOne.length < binaryNumbersWithZero.length)
      binaryNumbers = binaryNumbersWithOne;
    else binaryNumbers = binaryNumbersWithZero;

    if (binaryNumbers.length == 1) break;
  }
  scrubberRating = binaryNumbers[0];

  return scrubberRating;
}
