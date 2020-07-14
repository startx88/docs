const express = require('express');
const cors = require('cors')
const axios = require('axios')
// App
const app = express();

// Constants
const PORT = 4003;
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors());


const posts = {};

const handleEvent = (type, data) => {
    if (type === 'PostCreated') {
        const { id, title, body } = data;
        posts[id] = {
            id,
            title,
            body,
            comments: []
        }
    }
    if (type === 'CommentCreated') {
        const { postId, id, body, status } = data;
        const comments = posts[postId].comments;
        comments.push({
            id,
            body,
            status
        })
    }
    if (type === 'CommentUpdated') {
        const { postId, id, body, status } = data;
        const comments = posts[postId].comments;
        const comment = comments.find(com => com.id === id);
        comment.status = status
        comment.body = body;
    }
}

app.get('/posts', (req, res) => {
    res.send(posts)
})

app.post('/events', (req, res, next) => {
    const { type, data } = req.body;

    handleEvent(type, data);

    res.send(posts)
});


app.listen(PORT, async () => {
    console.log('Query services is running...', PORT);

    const res = await axios.get('http://localhost:4005/events');

    for (let event of res.data) {
        console.log('event', event.type);
        handleEvent(event.type, event.data)
    }

})