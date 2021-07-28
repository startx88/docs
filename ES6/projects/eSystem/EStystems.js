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