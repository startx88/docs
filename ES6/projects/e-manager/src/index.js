import './index.scss';
import Tag from './component/tag'
import Employee from './class/employee';
import Sidebar from './component/sidebar'

// dom
const root = document.querySelector("#root");

// add sidebar 
Sidebar(Tag("aside", root, null, { class: 'sidebar', id: "sidebar" }));
Tag("main", root, null, { class: 'main', id: 'main' });


// Manager class
class EmployeeManager {
  constructor() {
    this.employees = [];
  }

  // add
  addEmployee(employee) {
    this.employees.push(employee);
  }
  // remove
  removeEmployee(employee) {
    this.employees = this.employees.filter(emp => emp.id !== employee.id);
  }
}

// employees 
const em = new EmployeeManager();


// add employee
em.addEmployee(new Employee('Pradeep'))

console.log(em.employees);

