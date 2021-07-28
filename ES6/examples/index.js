// System
class RSystems {
  constructor() {
    this.employees = [];
  }
  addEmployee(employee) {
    this.employees.push(employee);
  }
  removeEmployee(employee) {
    this.employees.splice(this.employees.indexOf(employee), 1);
  }
}

// employee info
class Employee {
  constructor(name, age, email, salary) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.salary = salary;
  }
}


// filters
class Filter {
  byEmail(employees, email) {
    return employees.find(employee => employee.email === email);
  }

  byName(employees, name) {
    return employees.filter(employee => employee.name.toLowerCase() === name.toLowerCase());
  }

  byAge(employees, age) {
    return employees.filter(employee => employee.age === age);
  }


  bySalary(employees, salary) {
    return employees.filter(employee => employee.salary === salary);
  }

  bySalaryRange(employees, min, max) {
    return employees.filter(employee => employee.salary >= min && employee.salary <= max);
  }
}

// save into disk
// const fs = require('fs');
// class SaveToDisk {
//   #convertToString(data) {
//     return JSON.stringify(data);
//   }

//   save(filename, data) {
//     fs.writeFileSync(filename, this.#convertToString(data.employees));
//   }

//   load(filename) {
//     return fs.readFileSync(filename, 'utf8');
//   }
// }



// employees
const r = new RSystems();
const jhon = new Employee('John', 25, 'jhon@gmail.com', 5000);
const suraj = new Employee('Suraj', 27, 'suraj.k@gmail.com', 25000);
const kiran = new Employee('Kiran', 22, 'kiran@gmail.com', 15000);

r.addEmployee(jhon);
r.addEmployee(suraj);
r.addEmployee(kiran);

// const disk = new SaveToDisk();

// disk.save('./employee.json', r);
//const emps = disk.load('./employee.json')


const f = new Filter();

console.log(f.byName(r.employees, 'john'))