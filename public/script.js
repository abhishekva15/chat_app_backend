let socket = io();

let btn = document.getElementById('btn')
let inputmsg = document.getElementById("newmsg");
let msglist = document.getElementById('msglist')

btn.onclick = function excu(){
  socket.emit('send-msg',{
    msg:inputmsg.value
  }) 
}

socket.on('rsv-msg',(data)=>{
  let limsg = document.createElement('li');
  limsg.innerText = data.msg;
  msglist.appendChild(limsg)
})