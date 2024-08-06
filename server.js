const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use("/", express.static(__dirname + "/public"));

io.on("connection", (socket) => {
  console.log("User is connected", socket.id);

  socket.on("send-msg",(data)=>{
    console.log(data);
    io.emit("rsv-msg",data)
  });

 
});

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});
