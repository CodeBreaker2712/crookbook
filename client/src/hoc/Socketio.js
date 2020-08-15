import { Component } from "react";
import io from "socket.io-client";

export default class Clinet extends Component {
  state = {
    gameState: null,
    gameError: null,
    error: null,
    socket: null,
  };
  componentDidMount() {
    try {
      let socket = io("http://localhost:3001");
      socket.on("connect", () => this.setState({ socket: socket }));
      socket.on("gamestate", (gameState) => {
        let points = null;
        if (this.state.gameState) {
          points = [...this.state.gameState.points];
          if (
            this.state.gameState.round !== gameState.round &&
            !gameState.canSelect
          ) {
            points.push(gameState.roundPoints);
          }
        } else {
          points = [];
        }
        console.log(this.state.gameState);
        this.setState((prevState) => ({
          gameState: { ...prevState.gameState, ...gameState, points },
        }));
      });
      socket.on("gameerror", (gameError) =>
        this.setState({ gameError }, () => console.error(this.state.gameError))
      );
    } catch (error) {
      this.setState({ error });
      console.error(error);
    }
  }
  clearGameState = () => this.setState({ gameState: null });
  componentWillUnmount() {
    this.state.socket && this.state.socket.disconnect();
  }
  emitEvent = (event, data) => {
    this.state.socket.emit(event, data);
  };
  render() {
    return this.state.socket
      ? this.props.render({
          gameState: this.state.gameState,
          gameError: this.state.gameError,
          emitEvent: this.emitEvent,
          clearGameError: this.clearGameError,
        })
      : "Loading";
  }
}
