const bonus = 20           // global variable its can call from everywhere /

function sum(first, second) {
    let add = first + second + bonus; //bonus is a global variable/
    // console.log(add);        // can call from inside its local variable /

    if (add > 10) {
        // const mode = "happy"
        // console.log(mode);
        var mode = "happy"          // var accept calling from outside of block that showing in line 12 /
    }
    console.log(mode)
    // else {
    //     const mode = 'unhappy'
    //     console.log(mode);
    // }
    return add;
}
const result = sum(1, 3);
// console.log(result);
// console.log(add);   //cant call from outside , its global variable /