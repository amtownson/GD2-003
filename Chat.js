console.log("Chat");

var ws_uri = "wss://amtownson.github.io/GD2-003/Chat.html";
var websocket = new WebSocket(ws_uri);

websocket.onopen =function(event) {
	MessageAdd('<div class="message green">You have entered the chat room.</div>')
};

websocket.onclose = function(event) {
	MessageAdd('<div class="message blue">You have been disconnected.</div>');
};

websocket.onerror = function(event) {
	MessageAdd('div class="message red">Connection to chat failed.</div>');
};

websocket.onmessage = function(event) {
	var data = JSON.parse(event.data); 

	if(data.type == "message") {
		MessageAdd('<div class="message">" + data.username + ":" + data.message + "</div>');
	}
};

document.getElementById("chatForm").addEventListener("submit", function(event) {
	event.preventDefault();

	var messageElement = document.getElementsByTagName("input")[0];
	var message = messageElement.value;

	if (message.toString().length) {
		var username = localStorage.getItem("username");
		
		var data = {
			type: "message",
			username: username,
			message: message
		};

		websocket.send(JSON.stringify(data));
		messageElement.value = "";
	}
}, false);

function Username() {
	var username = window.prompt("Enter your username:", "");
	
	if (username.toString().length > 2) {
		localStorage.setItem("username", username);
	}
	else {
		alert("Your username must be at least two characters.");
		Username();
	}
}

Username();

function MessageAdd(message) {
    var chatMessages = document.getElementById("chatMessages");

    chatMessages.insertAdjacentHTML("beforeend", message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
};