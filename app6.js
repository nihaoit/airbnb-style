const nums = [1, 2, 3, 4, 5];

let sum = 0;
nums.forEach(num => {
  sum = sum + num;
});
console.log(sum);
sum = 0;
sum = nums.reduce((total, num) => total + num, 0);
console.log(sum);
