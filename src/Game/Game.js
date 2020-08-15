class Game {
  constructor(gameid, player, games) {
    this.rounds = 0;
    this.spectators = 0;
    this.gameid = gameid;
    this.players = [];
    this.players.push({ ...player, role: "", totalPoints: 0 });
    this.gameState = "WAITING";
    this.roundPoints = [];
    this.canSelect = false;
    this.games = games;
  }
  getPlayers = (playerid) => {
    if (this.gameState === "STARTED" && !this.canSelect) return this.players;
    let p = this.players.map((p) => {
      if (p.id === playerid) return p;
      else if (p.role === "KING" || p.role === "KNIGHT" || p.role === "")
        return p;
      else return { ...p, role: "UNKNOWN" };
    });
    return p;
  };
  addSpectator = () => {
    this.spectators++;
  };
  removeSpectator = () => {
    this.spectators--;
  };
  getGameid = () => {
    return this.gameid;
  };
  getRoundPoints = () => {
    return this.roundPoints;
  };
  getGameState = () => {
    return this.gameState;
  };
  addPlayer = (player) => {
    if (this.gameState !== "WAITING") this.addSpectator();
    else this.players.push({ ...player, role: "", totalPoints: 0 });
  };
  removePlayer = (playerid) => {
    let index = this.players.findIndex(({ id }) => playerid === id);
    if (index !== -1) this.players.splice(index, 1);
    if (this.gameState !== "WAITING") {
      this.roundPoints.splice(index, 1);
    }
    if (this.gameState !== "WAITING" && this.players.length < 4) {
      this.gameState = "GAMEENDED";
      this.players.sort((a, b) => a.totalPoints - b.totalPoints);
    }
  };
  startRound = () => {
    this.gameState = "STARTED";
    if (this.players.length > 3 && !this.canSelect) {
      this.rounds++;
      this.canSelect = true;
      const n = this.players.length;
      const positions = ["KING", "KNIGHT", "THIEF"];
      for (let i = 0; i < n - 3; i++) {
        positions.push("SOLDIER");
      }
      for (let i = 0; i < n; i++) {
        let index = Math.floor(Math.random() * (n - i));
        this.players[i].role = positions[index];
        positions.splice(index, 1);
      }
    }
  };
  playerSelected = (selectorid, playerSelectedid) => {
    if (this.rounds < 10 && this.canSelect) {
      this.roundPoints = [];
      let { role: selectorRole } = this.players.find(
        ({ id }) => selectorid === id
      );
      let { role: selectedRole } = this.players.find(
        ({ id }) => playerSelectedid === id
      );
      if (selectorRole === "KNIGHT" && selectedRole !== "KING") {
        for (let i = 0; i < this.players.length; i++) {
          this.roundPoints.push(
            this.calculatePoints(this.players[i].role, selectedRole === "THIEF")
          );
          this.players[i].totalPoints += this.roundPoints[i];
        }
        this.rounds++;
        this.canSelect = false;
      }
      if (this.rounds === 10) {
        this.gameState = "GAMEOVER";
        this.players.sort((a, b) => a.totalPoints - b.totalPoints);
      }
    }
  };
  calculatePoints = (type, win) => {
    switch (type) {
      case "KING":
        return 1000;
      case "KNIGHT":
        return win ? 500 : 0;
      case "SOLDIER":
        return 100;
      case "THIEF":
        return win ? 0 : 500;
    }
  };
  log = (playerid) => ({
    gameState: this.gameState,
    players: this.getPlayers(playerid),
    roundPoints: this.roundPoints,
    round: this.rounds,
    gameid: this.gameid,
    spectators: this.spectators,
    canSelect: this.canSelect,
  });
}

module.exports = Game;
