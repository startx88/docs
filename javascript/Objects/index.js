"use strict"
const Person = {
    name: "Pradeep",
    age: 20,
    salary: 50000,
}


const Person1 = Object.create(null)

Person1.name = "Pradeep";
Person1.age = 20;
Person1.salary = 50000;

console.log(Person, Person1)