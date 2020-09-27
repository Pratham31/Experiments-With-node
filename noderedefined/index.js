//const square = {
// area: (a) => (a * a),
//  perimeter: (a) => (4 * a)
//}

const sqaure = require('./sqaure.js');
const calcs = (a) => {
    console.log(`The value is of a ${a} and the area is :` + sqaure.area(a));
    console.log(`The value is of a ${a} and the perimeter is :` + sqaure.perimeter(a));
}

console.log(__filename);
console.log(__dirname);
calcs(5);