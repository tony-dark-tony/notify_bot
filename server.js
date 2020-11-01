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
    hello(socket);
});
function hello(socket){
    setInterval(function () {
        socket.emit("hello", "world");
    }, 1000)
}
http.listen(1212);