class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGretting() {
        return `Hi. I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
};

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor())
            description += ` Their major is ${this.major}.`;

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, location) {
        super(name, age);
        this.location = location;
    }

    hasLocation() {
        return !!this.location;
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasLocation())
            description += ` I'm visiting from ${this.location}.`;

        return description;
    }
}

const me = new Traveler('Nick DelPian', 26, 'Argentina');
console.log(me.getGretting());
console.log(me.getDescription());
console.log(me.hasLocation());

const other = new Student();
console.log(other.getGretting());
console.log(other.getDescription());
console.log(other.hasMajor());