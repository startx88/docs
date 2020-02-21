"use strict";

const root = document.getElementById("root");


function Employee(name, age, email, salary) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.salary = salary;
}

Employee.prototype.details = function () {
    console.log(` my name is ${this.name} age ${this.age} email is ${this.email}  salaryy ${this.salary} department ${this.department} and company ${this.company}`)
}

function Department(name, age, email, salary, department) {
    Employee.call(this, name, age, email, salary)
    this.department = department
}

Department.prototype = Object.create(Employee.prototype);
Department.prototype.constructor = Employee;

function Company(name, age, email, salary, company) {
    Employee.call(this, name, age, email, salary)
    this.company = company;
}

Company.prototype = Object.create(Employee.prototype);
Company.prototype.constructor = Company;


const p1 = new Company("Pradeep", 22, "ak@gmail.com", 34000, "IT", "R Systems")
