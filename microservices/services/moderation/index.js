const express = require('express');
const axios = require('axios')

// app
const app = express();

// constant
const PORT = 4004;
app.use(express.urlencoded({ extended: false }))
app.use(express.json());


// request
app.post('/events', (req, res) => {
    const { type, data } = req.body;
    if (type === "CommentCreated") {
        const status = data.body.includes('sex') ? 'rejected' : 'approved';
        axios.post('http://localhost:4005/events', {
            type: 'CommentModerated',
            data: {
                postId: data.postId,
                id: data.id,
                body: data.body,
                status
            }
        })
    }
    res.send({ status: 'OK' })
})

app.listen(PORT, () => {
    console.log('Event bus running...', PORT)
})