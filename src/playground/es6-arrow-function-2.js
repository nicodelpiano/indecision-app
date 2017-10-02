// arguments object - no longer bound with arrow functions

// Old js
const add = function (a, b) {
    console.log(arguments);
    return a + b;
};

console.log(add(55, 1));

const add2 = (a, b) => {
    // console.log(arguments);
    return a + b;
};

// this keyword - no longer bound

const user = {
    name: 'Nico',
    cities: ['Phila', 'New York', 'Dublin'],
    printPlacesLived() {
        const cityMessages = this.cities.map((city) => {
            return this.name + ' has lived in ' + city;
        });
        return cityMessages;
    }
};

console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
    // numbers - array of numbers
    // multiplyBy - single number
    // multiply - return a new array where the number have been multiplied
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map(x => x * this.multiplyBy);
    }
};

console.log(multiplier.multiply());