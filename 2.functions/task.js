function getArrayParams(...argh) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < argh.length; i++) {
    if (argh[i] > max) {
      max = argh[i]
    }
    if (argh[i] < min) {
      min = argh[i];
    }
    sum += argh[i];
  }

  let result = {
    min: min,
    max: max,
    avg: (function () {
      avg = sum / argh.length;
      return Number(avg.toFixed(2));
    })(),
  }

  return result;
}

function summElementsWorker(...argh) {
  if (argh.length === 0) {
    return 0;
  }
  
  let sum = 0;
  
  for (let i = 0; i < argh.length; i++) {
    sum += argh[i];
  }

  return sum;
}

function differenceMaxMinWorker(...argh) {
  if (argh.length === 0) {
    return 0;
  }

  let min = Math.min (...argh);
  let max = Math.max (...argh);
  let difference = max - min;

  return difference;
}

function differenceEvenOddWorker(...argh) {
  if (argh.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < argh.length; i++) {
    if (argh[i] % 2 === 0) {
      sumEvenElement += argh[i];
    } else (sumOddElement += argh[i]);
  }

  let difference = sumEvenElement - sumOddElement;

  return difference;
}

function averageEvenElementsWorker(...argh) {
  if (argh.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < argh.length; i++) {
    if (argh[i] % 2 === 0) {
      sumEvenElement += argh[i];
      countEvenElement++;
    }
  }

  let avg = sumEvenElement /  countEvenElement;

  return avg;
}

function averageEvenElementsWorker(...argh) {
  if (argh.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < argh.length; i++) {
    if (argh[i] % 2 === 0) {
      sumEvenElement += argh[i];
      countEvenElement++;
    }
  }

  let avg = sumEvenElement /  countEvenElement;

  return avg;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);

    if  (maxWorkerResult < result) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}
