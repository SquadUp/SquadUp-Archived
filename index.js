var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

var users = [];
var readyCount = 0;

io.on("connection", function(socket) {
    console.log("User " + socket.id + " has joined.");
    users.push(socket.id);
    console.log(users.length + " users connected");


    socket.on("createRoom", function () {
    	var thisRoomId = Math.floor(Math.random() * 100000);
    	console.log("new room " + thisRoomId);
    	socket.emit('newRoom', thisRoomId.toString());
    });


    socket.on("disconnect", function() {
        console.log("User " + socket.id + " left");
        users.splice(users.indexOf(socket.id), 1);
        console.log(users.length + " users connected");
    });
});

http.listen((process.env.PORT || 7777), function() {
    console.log("Listening for connections on port 7777.");
});


