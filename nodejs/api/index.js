const http = require('http');


console.log(http.STATUS_CODES)
const app = http.createServer((req, res) => {
    console.log(req);
});


app.listen(3000, () => {
    console.log('server is running...')
}); 