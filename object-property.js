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








const student = [
    { id: 21, name: 'sunny' },
    { id: 31, name: 'manna' },
    { id: 12, name: 'moushumi' },
    { id: 55, name: 'Dipjol' }
];
// const output = [];

// for (let i = 0; i < student.length; i++) {
//     // const names = student[2].name;
//     const names = student.filter(student = student.name == student[2].name)
//     output.push(names)
// }
// console.log(output);

// const userName = student.map(student => student.username)
const bigger = student.filter(s => s.name == student[2].name)
console.log(bigger);

