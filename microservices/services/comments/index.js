const express = require('express');
const axios = require('axios')
const cors = require('cors')
const { randomBytes } = require('crypto')
// App
const app = express();

// Constants
const PORT = 4002;
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

const commentsByPostId = {};

app.get('/posts/comments', (req, res, next) => {
    res.send(commentsByPostId)
});

app.post('/posts/:postId/comments', async (req, res, next) => {
    const { body } = req.body;
    const id = randomBytes(4).toString('hex');
    const postId = req.params.postId;
    const comments = commentsByPostId[postId] || [];
    comments.push({ id, body, status: 'pending' });
    commentsByPostId[postId] = comments;
    await axios.post('http://event-bus-srv:4005/events', {
        type: 'CommentCreated',
        data: {
            postId,
            id,
            body,
            status: 'pending'
        }
    });

    res.status(201).send(commentsByPostId)
})

app.post('/events', async (req, res) => {
    console.log('RECIEVED COMMENTS EVENTS', req.body.type)
    const { type, data } = req.body;

    if (type === 'CommentModerated') {
        const { id, postId, body, status } = data;
        console.log('commentsByPostId', commentsByPostId)
        const comments = commentsByPostId[postId];
        const comment = comments.find(com => com.id === id);
        comment.status = status;

        await axios.post('http://event-bus-srv:4005/events', {
            type: 'CommentUpdated',
            data: data
        });
    }

    res.send({})
})
// server listening


app.listen(PORT, () => {
    console.log('Post server is running', PORT)
})