// //......Falsy/
// false
// 0
// ""
// undefined
// null
// NaN

// //....truthy
// "0", " ", []

const name = 12,13;
if (name || name == 0) {
    console.log("true")
}
else {
    console.log("false")
}