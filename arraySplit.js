const nums = [11, 22, 33, 44, 55, 66];
// console.log(nums);
// const output = []

// const part = nums.slice(2, 5);
// console.log(part);
// output.push(part)
// console.log(output);

const remove = nums.splice(2, 5, 300, 400);
// console.log(remove);
// console.log(nums);

const together = nums.join(" , ");
console.log(together);