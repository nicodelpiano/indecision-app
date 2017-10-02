// const square = function (x) {
    // return x * x;
// };

// const squareArrow = x => {
//    return x * x;
// };

// const squareArrow = x => x * x;

// console.log(squareArrow(8));

const comp = (f, g, x) => f(g(x))

const getFirstName = x => comp(x => x[0], w => w.split(' '), x);

console.log(getFirstName("Mike Smith"));