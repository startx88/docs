// create employee
let Gender = Object.freeze({ male: 'Male', female: 'Female', unknown: 'unkown' });

// employee
class Employee {
  constructor() {
    // employee personal info
    this.firstname = this.lastname = this.gender = '';
    this.age = 0;

    // employee contact info
    this.mobile = this.email = '';

    // employee job info
    this.company = this.designation = '';
    this.salary = 0;

    // employee skills
    this.skills = [];

    // employee address info
    this.address = this.state = this.city = this.zip = '';
  }

  create() {
    return new EmployeeBuilder();
  }
}

// employee builder class
class EmployeeBuilder {
  constructor(employee = new Employee()) {
    this.employee = employee;
  };

  setFirstname(firstname) { this.employee.firstname = firstname; return this; }
  setLastname(lastname) { this.employee.lastname = lastname; return this; }
  setGender(gender) { this.employee.gender = gender; return this; }
  setAge(age) { this.employee.age = age; return this; }
  setMobile(mobile) { this.employee.mobile = mobile; return this; }
  setEmail(email) { this.employee.email = email; return this; }

  // set skills
  setSkills(skills) { this.employee.skills.push(skills); return this }

  // set job info
  setCompany(company) { this.employee.company = company; return this; }
  setDesignation(designation) { this.employee.designation = designation; return this; }
  setSalary(salary) { this.employee.salary = salary; return this; }

  // set  address info
  setAddress(address) { this.employee.address = address; }
  setState(state) { this.employee.state = state; return this }
  setCity(city) { this.employee.city = city; return this }
  setZip(zip) { this.employee.zip = zip; return }

  // employee object
  build() { return this.employee; }

}


// create employee object
const e = new EmployeeBuilder();
e.setFirstname('Pradeep')
  .setLastname('Kumar')
  .setAge(32)
  .setMobile('7291893484')
  .setEmail('arya.creativemind@gmail.com');


// or another way

class EmployeeBuilderAnother {
  constructor(employee = new Employee()) {
    this.employee = employee;
  };

  get info() { return new EmployeePersonalBuilder(this.employee); }

  get contact() { return new EmployeeContactBuilder(this.employee); }

  get lives() { return new EmployeeAddressBuilder(this.employee); }

  get works() { return new EmployeeJobBuilder(this.employee); }

  get skills() { return new EmployeeSkillsBuilder(this.employee); }

  build() { return this.employee; }
}


class EmployeePersonalBuilder extends EmployeeBuilderAnother {
  constructor(employee) { super(employee); }
  setFirstname(firstname) { this.employee.firstname = firstname; return this; }
  setLastname(lastname) { this.employee.lastname = lastname; return this; }
  setGender(gender) { this.employee.gender = gender; return this; }
  setAge(age) { this.employee.age = age; return this; }
}

class EmployeeContactBuilder extends EmployeeBuilderAnother {
  constructor(employee) { super(employee); }
  setMobile(mobile) { this.employee.mobile = mobile; return this; }
  setEmail(email) { this.employee.email = email; return this; }
}

class EmployeeAddressBuilder extends EmployeeBuilderAnother {
  constructor(employee) { super(employee); }
  setAddress(address) { this.employee.address = address; return this; }
  setState(state) { this.employee.state = state; return this }
  setCity(city) { this.employee.city = city; return this }
  setZip(zip) { this.employee.zip = zip; return this; }
}

class EmployeeJobBuilder extends EmployeeBuilderAnother {
  constructor(employee) {
    super(employee);
  }
  setCompany(company) { this.employee.company = company; return this; }
  setDesignation(designation) { this.employee.designation = designation; return this; }
  setSalary(salary) { this.employee.salary = salary; return this; }
}

class EmployeeSkillsBuilder extends EmployeeBuilderAnother {
  constructor(employee) {
    super(employee);
  }
  setSkills(skills) { this.employee.skills.push(...skills); return this }
}

const eba = new EmployeeBuilderAnother();

let person = eba
  .info.setFirstname('Pradeep').setLastname('kumar').setAge(32).setGender(Gender.male)
  .lives.setAddress('k-801, Arihant arden').setState('Utter Pradesh').setCity('Noida').setZip('201306')
  .works.setCompany('R Systems').setDesignation("SSR").setSalary(80_000)
  .contact.setMobile('7291893484').setEmail('arya.creativemind@gmail.com')
  .skills.setSkills(['HTML', 'CSS', 'JS', 'VUE', 'React', 'Angular'])
  .build();


console.log(person);