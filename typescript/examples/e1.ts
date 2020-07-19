import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

axios.get(URL)
  .then(res => res.data as Todo)
  .then(data => {
    displayTodo(data.id, data.title, data.completed)
  });

function displayTodo(id: number, title: string, completed: boolean) {
  console.log(`
    ID: ${id}
    Title: ${title}
    Completed: ${completed}
  `)
}