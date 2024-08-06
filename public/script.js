let socket = io();

// socket.on('join_server',()=>{
//     console.log("Collected the new event from server")
//     const div = document.createElement('div');
//     div.innerChild = "New Event from Server";
//     document.body.appendChild(div)
// })
let i= 0
socket.on("join_server", () => {
  console.log("Received join_server event from server");
  const div = document.createElement("div");
  div.innerText = `New Event from Server ${i++}`;
  document.body.appendChild(div);
});
