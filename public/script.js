const event = document.getElementById("evname");
const params = document.getElementById("evparams");
const playerdivs = document.getElementsByClassName("player");
let socket = null;
function updateWindow(newGameState) {
  newGameState.players.forEach((player,ind)=>{
    playerdivs[ind].innerHTML = player;
  })
}
function connect() {
  socket = io("ws://localhost:3000");
  socket.on("connect", () => {
    console.log("connected to the socket");
  });
  socket.on("gameerror", (message) => {
    console.error(message);
  });
  socket.on("gamestate", (newGameState) => {
    updateWindow(newGameState);
  });
}
connect();
window.addEventListener("unload", () => {
  socket.disconnect();
});
function joinGame() {
  if (socket) {
    let gameid = document.getElementById("game").value;
    let playername = document.getElementById("name").value;
    socket.emit("joingame", { gameid, playername });
  }
}
function exitGame() {
  if (socket) {
    socket.emit("exitgame");
  }
}
function pickChit() {
  if (socket) {
    socket.emit("pick");
  }
}
function createGame() {
  if (socket) {
    let gameid = document.getElementById("game").value;
    let playername = document.getElementById("name").value;
    socket.emit("creategame", { gameid, playername });
  }
}
function selectPlayer() {
  if (socket) {
    let selectedPlayerid = document.getElementById("pick").value;
    socket.emit("selection", selectedPlayerid);
  }
}
