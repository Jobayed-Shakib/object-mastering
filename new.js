class Person{
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('jamal', 'uddin', 2000);
console.log(heroPerson);

function Person1(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}
const normalPerson = new Person1 ('abul', 'uddin', 9000);
console.log(normalPerson);