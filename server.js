var express = require('express');


var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.download("./text.txt");
})

io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('attime', (msg) => {
        console.log(msg)
    })
    timeout();
    socket.on('connection', (msg) => {
        console.log(msg)
    })
});

function timeout() {
    setTimeout(function () {
    io.emit('msg',"A message from server");
      timeout();
    }, 5000);
  }
http.listen(1212);