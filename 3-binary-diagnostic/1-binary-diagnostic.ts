import * as fs from 'fs';

export function binaryDiagnostics(): number {
  let file = fs.readFileSync('./src/input.txt', 'utf-8');
  let binaryNumbers = file.split('\n');

  let gammaRate = parseInt(computeGammaRate(binaryNumbers), 2);
  let epsilonRate = parseInt(computeEpsilonRate(binaryNumbers), 2);

  let powerConsumption = gammaRate * epsilonRate;
  return powerConsumption;
}

function computeGammaRate(binaryNumbers: string[]): string {
  let gammaRate = '';

  for (let column = 0; column < binaryNumbers[0].length; column++) {
    let numberOfZeroBits = 0;
    let numberOfOneBits = 0;

    binaryNumbers.forEach((binaryNumber: string) => {
      if (binaryNumber[column] == '0') numberOfZeroBits++;
      else numberOfOneBits++;
    });

    if (numberOfOneBits > numberOfZeroBits) gammaRate += '1';
    else gammaRate += '0';
  }

  return gammaRate;
}

function computeEpsilonRate(binaryNumbers: string[]): string {
  let epsilonRate = '';

  for (let column = 0; column < binaryNumbers[0].length; column++) {
    let numberOfZeroBits = 0;
    let numberOfOneBits = 0;

    binaryNumbers.forEach((binaryNumber: string) => {
      if (binaryNumber[column] == '0') numberOfZeroBits++;
      else numberOfOneBits++;
    });

    if (numberOfOneBits < numberOfZeroBits) epsilonRate += '1';
    else epsilonRate += '0';
  }

  return epsilonRate;
}
