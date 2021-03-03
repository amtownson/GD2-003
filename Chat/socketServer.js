const express = require('express') 
const app = express() 
var http = require('http').Server(app);
var io = require('socket.io')(http);
const port = 3333; 


app.use(express.static('public'));

io.on('connection', (socket) => {

	socket.on('chat message', (msg) => {
	 io.emit('chat message', msg);
	 console.log(msg);
	});

});



http.listen(port, () => {

console.log('listening on port ' + port)
});

