/***********
 * Create Task using function
 * 
 * */
let Task2 = function (name, description, finished, dueDate) {

  this.name = name;
  this.description = description;
  this.finished = finished;
  this.dueDate = dueDate;
}

// factory function 
let TaskBuilder2 = function () {

  let name;
  let description;
  let isFinished = false;
  let dueDate;

  return {
    setName: function (name) {
      this.name = name;
      return this;
    },
    setDescription: function (description) {
      this.description = description;
      return this;
    },
    setFinished: function (finished) {
      this.finished = finished;
      return this;
    },
    setDueDate: function (dueDate) {
      this.dueDate = dueDate;
      return this;
    },
    build: function () {
      return new Task2(name, description, isFinished, dueDate);
    }
  };
};

let task1 = new TaskBuilder2().setName('Task A').setDescription('finish book')
  .setDueDate(new Date(2019, 5, 12)).build();
console.log(task1);