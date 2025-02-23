/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */

 function getSumOfDigits(n) {
  let result = 0;

  for (let i = 0; i < String(n).length; i += 1) {
    if (result > 0 && result < 10) {
      return result;
    } else {
      result = 0;
      for (let j = i; j < String(n).length; j += 1) {
        result += Number(String(n)[j]);
      }
    }
  }

  return result;
}

module.exports = {
  getSumOfDigits,
};