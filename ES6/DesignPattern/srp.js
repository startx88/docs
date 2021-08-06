/***********
 * Single responsibility principle:
 *
 * A class has only a primary responsibility if it should only do one thing, and do it well.
 *
 * A class should have one, and only one, reason to change.
 *
 * It is a bad idea to add more than one responsibility.
 *
 *
 * Note:
 * 1. The argument for the single responsibility principle is relatively simple:
 *    it makes your software easier to implement and prevents unexpected side-effects of future changes
 *
 * 2. If your class implements multiple responsibilities, they are no longer independent of each other.
 *
 * Example:
 * */

// class Journal {
//   constructor() {
//     this.entries = {};
//   }

//   // add
//   addEntry(text) {
//     let c = ++Journal.count;
//     let entry = `${c}: ${text}`;
//     this.entries[c] = entry;
//     return c;
//   }

//   // remove entry
//   removeEntry(index) {
//     delete this.entries[index];
//   }

//   // change toString
//   toString() {
//     return Object.values(this.entries).join('\n');
//   }
// }
// Journal.count = 0;
// const j = new Journal();
// j.addEntry('I love javascript');
// j.addEntry('I love ES6');
// console.log(j.toString())

/***********
 * Suppose you want to add antoher functionality
 * ex:
 * 1. save entry into disk
 * 2. load entry from Disk
 * 3. load entry from url
 * 
 * */


const fs = require('fs');
class Journal {
  constructor() {
    this.entries = {};
  }

  // add
  addEntry(text) {
    let c = ++Journal.count;
    let entry = `${c}: ${text}`;
    this.entries[c] = entry;
    return c;
  }

  // remove entry
  removeEntry(index) {
    delete this.entries[index];
  }

  // change toString
  toString() {
    return Object.values(this.entries).join('\n');
  }
}


// its difficult to manage this it has more than one responsibility.


// how to solve this problem?
// 1. separate the functionality (seperation of concern)
// 2. make them independent of each other
// 3. make them decoupled
// 4. make them testable
// 5. make them reusable
// 6. make them composeable

class PersistanceManager {
  // save
  save(filename, journal) {
    fs.writeFileSync(filename, journal.toString());
  }

  // load
  load(filename) {
    return JSON.parse(fs.readFileSync(filename));
  }

  // load from url
  loadFromUrl(url) {
    // return JSON.parse(fs.readFileSync(url));
  }
}

Journal.count = 0;
const j = new Journal();
j.addEntry('I love javascript');
j.addEntry('I love ES6');
console.log(j.toString());

const p = new PersistanceManager();
p.save('./journal.txt', j);


// now journal has only one responsibility
// easier to manage



/***********
 *
 *
 * // System
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
 * */

class UserManager {
  constructor() {
    this.users = [];
  }
}

const s = new UserManager;

class UserRegistration {
  register(user) {
    s.users.push(user);
    if (s.users.includes(user)) {
      Emailer.sent()
    } else {
      new Error().show();
    }
  }
}


class Emailer {
  static sent() {
    console.log('email send');
  }
}

class Error {
  show(message) {
    console.log('somwthing went wrong');
  }
}

const u = new UserRegistration();

u.register({ name: 'pradeep', age: 2 });