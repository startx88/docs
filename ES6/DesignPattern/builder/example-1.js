/***********
 * Builder pattern example:
 * Create task object using builder design pattern
 * 
 * Example: 1 - Using class pattern
 * */
class Task {
  constructor(name, description, finished, date) {
    this.name = name;
    this.description = description;
    this.isFinished = finished;
    this.dueDate = date;
  }

  toString() {
    return JSON.stringify(this);
  }
}

class TaskBuilder {
  constructor() {
    this.task = new Task();
  }

  setName(name) {
    this.task.name = name;
    return this;
  }

  setDescription(description) {
    this.task.description = description;
    return this;
  }

  setFinished(finished) {
    this.task.isFinished = finished;
    return this;
  }

  setDueDate(date) {
    this.task.dueDate = date;
    return this;
  }

  build() {
    return this.task;
  }
}


// Note that each function returns this, the reference to the current object.
const task = new TaskBuilder().setName('Complete contact page').setDescription('You need to add new contact').setFinished(true).setDueDate(new Date(Date.now())).build();
//  This way we can chain the function calls. The chain of function calls is known as fluent API.
