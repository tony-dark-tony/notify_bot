var socket = io();
socket.on('hello', (data)=>{
    console.log(data);
})
$(document).ready(function(){
    $('.contact1-form-btn').click(function(e){
        e.preventDefault();
        socket.emit('msg', $('.input1').val());
        $('.input1').val('');
    })
    socket.on('message', (data) => {
        $('.contact1-form-title').append('<span>'+data+'</span><br>');
        console.log(data);
    })
})