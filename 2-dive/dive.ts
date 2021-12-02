import * as fs from 'fs';

interface Movement {
  direction: string;
  value: number;
}

export function dive() {
  let horizontalPostion = 0;
  let depth = 0;
  let aim = 0;

  let file = fs.readFileSync('./src/input.txt', 'utf-8');
  let movementsArray = file.split('\n');

  let movements: Movement[] = [];
  movementsArray.forEach((movement: string) => {
    let movementDirection = movement.slice(0, movement.indexOf(' '));
    let movementValue = parseInt(movement.slice(movement.indexOf(' ')));
    movements.push({ direction: movementDirection, value: movementValue });
  });

  movements.forEach((movement: Movement) => {
    if (movement.direction == 'forward') {
      horizontalPostion += movement.value;
      depth += aim * movement.value;
    }

    if (movement.direction == 'up') aim -= movement.value;

    if (movement.direction == 'down') aim += movement.value;
  });

  let multipliedFinalValues = horizontalPostion * depth;
  return multipliedFinalValues;
}
