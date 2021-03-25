const POST_URL = "http://jsonplaceholder.typicode.com/posts";

interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

async function getPost(URL: string) {
  const response = await fetch(URL);
  const data = await response.json();
  return data as IPost[];
}
let posts = null;
getPost(POST_URL).then((result) => {
  posts = result;
});
