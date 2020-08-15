const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3001;
const publicDirectoryPath = path.join(__dirname, "../public");
const Game = require("./Game/Game");
const e = require("express");
app.use(express.static(publicDirectoryPath));
let games = [];

io.on("connect", (socket) => {
  console.log("User connected");
  socket.on("creategame", ({ gameid, playername }) => {
    let g = games.find(({ id }) => id === gameid);
    if (g) {
      socket.emit("gameerror", "The game already exists");
      return;
    }
    socket.join(gameid);
    socket.gameid = gameid;
    socket.playername = playername;
    socket.playerid = Math.random();
    socket.game = new Game(gameid, { playername, id: socket.playerid }, games);
    games.push({ game: socket.game, id: gameid });
    socket.emit("gamestate", {
      user: socket.playerid,
      ...socket.game.log(socket.playerid),
    });
    console.log(games);
  });
  socket.on("joingame", ({ gameid, playername }) => {
    let modifiedGame = games.find(({ id }) => id === gameid);
    if (modifiedGame) {
      socket.join(gameid);
      socket.gameid = gameid;
      socket.playername = playername;
      socket.playerid = Math.random();
      socket.game = modifiedGame.game;
      socket.game.addPlayer({ playername, id: socket.playerid });
      socket.emit("gamestate", {
        user: socket.playerid,
        ...socket.game.log(socket.playerid),
      });
      socket.to(socket.gameid).emit("gamestate", {
        ...socket.game.log(socket.playerid),
      });
      console.log(games);
    } else {
      console.log("Error game not found");
      socket.emit("gameerror", "Game not Found");
      console.log(games);
    }
  });
  socket.on("startround", () => {
    socket.game.startRound();
  });
  socket.on("pick", () => {
    if (socket.game.getGameState() === "STARTED" && socket.game.canSelect) {
      socket.emit("gamestate", {
        ...socket.game.log(socket.playerid),
      });
    }
  });
  socket.on("selection", (selectedPlayerid) => {
    socket.game.playerSelected(socket.playerid, selectedPlayerid);
    io.to(socket.gameid).emit("gamestate", {
      ...socket.game.log(socket.playerid),
    });
  });
  socket.on("exitgame", () => {
    socket.leave(socket.gameid);
    socket.game.removePlayer(socket.playerid);
    if (socket.game.players.length < 1) {
      socket.gameid = null;
      let index = games.findIndex(({ id }) => id === socket.gameid);
      games.splice(index, 1);
    }
    socket.gameid = null;
    io.to(socket.gameid).emit("gamestate", {
      ...socket.game.log(socket.playerid),
    });
  });
  socket.on("disconnect", () => {
    if (socket.gameid) {
      socket.leave(socket.gameid);
      socket.game.removePlayer(socket.playerid);
      if (socket.game.players.length < 1) {
        socket.gameid = null;
        let index = games.findIndex(({ id }) => id === socket.gameid);
        games.splice(index, 1);
      }
      io.to(socket.gameid).emit("gamestate", {
        ...socket.game.log(socket.playerid),
      });
    }
    console.log("User disconnected");
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
