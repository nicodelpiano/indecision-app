var nameVar = 'Nico';
var nameVar = 'Mike';
console.log(nameVar);

let nameLet = 'Jen';
nameLet = 'Jen';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'Hal';
    return petName;
};

const petName = getPetName();
console.log(petName);

// Block scoping

const fullName = 'Ndp p';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);