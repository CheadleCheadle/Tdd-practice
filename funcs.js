function isFive(num) {
  return (num == 5 ? true: false);
}

function isOdd(number) {
  if (typeof number != 'number') {
    throw new Error('required object for test spec');
  }

  if (Math.abs(number) % 2 === 0) {
    return false;
  } else {
    return true;
  }
}

function myRange(min, max, step = 1) {
  let newArr = [];

  for (let i = min; i <= max; i += step) {
    newArr.push(i);
  }
  return newArr;
}


module.exports = { isFive, isOdd, myRange };

