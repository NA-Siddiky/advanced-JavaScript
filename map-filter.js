const numbers = [1, 2, 3, 4, 5];                // basic old formula /
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     // console.log(element);

//     const result = element * element;
//     // console.log(result);

//     output.push(result);
// }
// console.log(output);



// numbers.map(function (element, index, array) {              //using map //
//     console.log(element, index, array)
//     return element * element;
// })

// const element = numbers;
function square(elements) {
    const result = elements.map(element => element * element);
    return result;
    // return element * element;
}

const output = square(numbers);
console.log(output);




// const numbers = [1, 2, 2, 2, 5];                         //applying arrow function/

// const element = numbers;
// const result = numbers.map(function (element) {        //formula -1 /
//     return element * element;
// })

// function square(element) {
//     return element * element;                        //formula -2 /
// }
// const square = element => element * element;         //formula -3 /
// const square = x => x * x;                           //formula -4 /

// console.log(element);

const result = numbers.map(y => y * y);               //using map function/
// const result = numbers.filter(x => x > 2);            //using map filter/
// const result = numbers.find(x => x == 2);              //using map find/
// console.log(result);