// const student = [
//     { id: 21, name: 'sunny' },
//     { id: 31, name: 'manna' },
//     { id: 12, name: 'moushumi' },
//     { id: 55, name: 'Dipjol' }
// ];
// const output = [];

// for (let i = 0; i < student.length; i++) {
//     const names = student[2].name;
//     // console.log(names);
//     const ids = student[i].id;
//     // console.log(ids);
//     output.push(names)
// }
// console.log(output);

// const nameProperty = student.map(s => s.name);
// const ids = student.map(s => s.id);
// const bigger = student.filter(s => s.id > 30)
// const bigger = student.filter(s => s.name == student[2].name)
// const biggerFinding = student.find(s => s.id > 30)
// console.log(bigger);








// const student = [
//     { id: 21, name: 'sunny' },
//     { id: 31, name: 'manna' },
//     { id: 12, name: 'moushumi' },
//     { id: 55, name: 'Dipjol' }
// ];
// const output = [];
// for (let i = 0; i < student.length; i++) {
//     if (i === 2) {
//         const name = student[i].name;
//         output.push(name)
//     }
// }
// console.log(output);









const student = [
    { id: 21, name: 'Dipjol' },
    { id: 31, name: 'manna' },
    { id: 12, name: 'moushumi' },
    { id: 55, name: 'sunny' }
];
const output = [];

for (let i = 0; i < student.length; i++) {
    const names = student[1].id;
    // console.log(names);
    output.push(names)
    // if (i === 2) {
    //     const name = student[i].name;
    //     output.push(name)
    // }
}
for (let i = 0; i < student.length; i++) {
    const names = student[2].name;
    // console.log(names)
    output.push(names)
}
for (let i = 0; i < student.length; i++) {
    const names = student[3].name;
    // console.log(names)
    output.push(names)
}
// console.log(output);

function justName() {
    for (let i = 0; i < output.length; i++) {
        const element = output[i];
        console.log(element);
        return element;
    }

}
console.log(justName());







// const bigger = student.filter(s => s.name == student[2].name)
// console.log(bigger);

