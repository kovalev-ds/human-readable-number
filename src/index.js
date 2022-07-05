const units = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

const dozens = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

module.exports = function toReadable(number) {
  if (number <= 19) return units[number];
  if (number <= 99)
    return number % 10 === 0
      ? dozens[(number / 10) | 0]
      : dozens[(number / 10) | 0] + " " + units[number % 10];
  return number % 100 === 0
    ? units[(number / 100) | 0] + " hundred"
    : units[(number / 100) | 0] + " hundred " + toReadable(number % 100);
};
