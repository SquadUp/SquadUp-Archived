var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

var users = [];

var rooms = [];

io.on("connection", function(socket) {
    console.log("User " + socket.id + " has joined.");
    users.push(socket.id);
    console.log(users.length + " users connected");


    socket.on("createRoom", function () {
    	var thisRoomId = Math.floor(Math.random() * 100000);
    	console.log("new room " + thisRoomId);
    	//push new room to list
    	rooms.push({
    		id: thisRoomId,
    		time: 0,
    		location: 0,
    		details: "New room without any details"
    	});

    	socket.emit('newRoom', thisRoomId);
    });

    socket.on("joinRoom", function (id) {
    	console.log(this.id + " Request to join room " + id);
    	roomIndex = searchRooms(id)
    	if (roomIndex != -1) { //so long as the room exists
    		this.join(id);
    		console.log(this.id + " joined room " + id);
    		this.emit("newEventDetails", rooms[roomIndex]);
    		console.log(rooms[roomIndex])
    	}
    	else {
    		console.log("Room doesn't exist");
    	}
    });


    socket.on("disconnect", function() {
        console.log("User " + socket.id + " left");
        users.splice(users.indexOf(socket.id), 1);
        console.log(users.length + " users connected");
    });
});

function searchRooms(id) {
	for (var i = 0; i < rooms.length; i++) {
		if (rooms[i].id === id) {
			return i;
		}
	}
	return -1;
}

http.listen((process.env.PORT || 7777), function() {
    console.log("Listening for connections on port 7777.");
});


