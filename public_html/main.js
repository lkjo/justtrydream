$(function(){
    var socket = io.connect();
    $(".output").click(function(){
        var name = $(".name").val();
        var content = $(".content").val();
        if((name && content) != ''){
            socket.emit('message', {
                name: name,
                content: content
            });
        }else {
            alert("請寫名字或內容");
        } 
    })
    socket.on('mess', function(name, content){
        $('.chat').append("<h5>" + name + ' : ' + content + "</h5>");
    })
    socket.on('online', function(){
        $('.chat').append('<h5 style="color: rgb(66,244,80);">console : Someone connected.</h5>');
    });
    socket.on('offline', function(name){
        $('.chat').append('<h5 style="color: rgb(66,244,80);">console : ' + name + ' disconnected.</h5>');
    });
});