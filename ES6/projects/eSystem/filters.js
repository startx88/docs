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

module.exports = Filter;