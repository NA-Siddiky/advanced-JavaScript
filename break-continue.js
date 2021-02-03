// const nums = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < nums.length; i++) {
//     const element = nums[i];
//     // console.log(element);
//     if (element > 3) {
//         break
//     }
//     console.log(element);
// }


const nums = [1, -2, 3, -4, 5, 6];
for (let i = 0; i < nums.length; i++) {             //problem , hot the first look run ?/
    const element = nums[i];
    // console.log(element);
    if (element > 3) {
        break
    }
    console.log(element);
}
for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    // console.log(element);
    if (element < 0) {
        continue
    }
    console.log(" , ", element);
}