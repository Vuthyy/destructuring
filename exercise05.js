function sumAll(...nums) {
  return nums.reduce((acc, num) => acc + num, 0);
}

console.log(sumAll(1, 2));
console.log(sumAll(1, 2, 3, 4, 5));
