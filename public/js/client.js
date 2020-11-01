var socket = io();
socket.on('hello', (data)=>{
    console.log(data);
})
$(document).ready(function(){
    $('.contact1-form-btn').click(function(e){
        e.preventDefault();
        socket.emit('msg', 'hello world');
    })
    socket.on('message', (data) => {
        $('.contact1-form-title').html(data);
        console.log(data);
    })
})