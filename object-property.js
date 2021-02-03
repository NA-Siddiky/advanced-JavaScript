const student = [
    { id: 21, name: 'sunny' },
    { id: 31, name: 'manna' },
    { id: 12, name: 'moushumi' },
    { id: 55, name: 'Dipjol' }
];
const output = [];
// const finalOutput = output.name;         //problem showing name/

for (let i = 0; i < student.length; i++) {
    const names = student[i].name;
    // console.log(names);
    const ids = student[i].id;
    // console.log(ids);
    output.push(names)
}
console.log(output);


// const nameProperty = student.map(s => s.name);
// const ids = student.map(s => s.id);
// const bigger = student.filter(s => s.id > 30)
// const biggerFinding = student.find(s => s.id > 30)
// console.log(biggerFinding);