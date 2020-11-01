var express = require('express');


var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
})

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('msg', (msg) => {
        io.emit('message', msg)
        console.log(msg)
    })
});
http.listen(1212);