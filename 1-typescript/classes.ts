class Person {
    name: string;
    age: number;
    city: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.city = 'Banglore';
    }

    introduce() {
        console.log('Hi I am ' + this.name + ". I am " + this.age + " years old. I am from " + this.city);
    }
}

let sam = new Person('Sam Dsouza', 34);
sam.introduce();
