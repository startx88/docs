const express = require('express');
const axios = require('axios')

// app
const app = express();

// constant
const PORT = 4005;
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

const events = []
// request
app.post('/events', (req, res) => {
    const event = req.body;
    events.push(event);

    axios.post('http://localhost:4001/events', event)
    axios.post('http://localhost:4002/events', event)
    axios.post('http://localhost:4003/events', event);
    axios.post('http://localhost:4004/events', event);
    res.send({ status: 'OK' })
})

app.get('/events', (req, res, next) => {
    res.send(events);
});

app.listen(PORT, () => {
    console.log('Event bus running...', PORT)
})