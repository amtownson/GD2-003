const app = require('express')(); 
const http = require('http').createServer(app);
const port = 3333; 
const io = require('socket.io')(http);


app.use(express.static('public'));


io.on('connection', (socket) => {


	socket.on('chat message', (msg) => {
	 // io.emit('chat message', msg);
	 console.log(msg);
	});

});


http.listen(port, () => {

console.log('listening on port ' + port)
});
