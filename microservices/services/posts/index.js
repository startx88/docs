const express = require('express');
const cors = require('cors')
const axios = require('axios')
// App
const app = express();

// Constants
const PORT = 4000;
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
const posts = {};

app.get('/posts', (req, res, next) => {
    res.send(posts)
});

app.post('/posts/create', async (req, res, next) => {
    const { title, body } = req.body;
    const id = Math.random().toString();
    posts[id] = {
        id: id,
        title: title,
        body: body
    }

    await axios.post('http://event-bus-srv:4005/events', {
        type: 'PostCreated',
        data: {
            id,
            title,
            body
        }
    });

    res.status(201).send(posts[id])
});


app.post('/events', (req, res) => {
    console.log('RECIEVED POSTS EVENTS', req.body)
    const { type, data } = req.body;
    res.send({})
});

// server listening


app.listen(PORT, () => {
    console.log('Post server is running', PORT)
})