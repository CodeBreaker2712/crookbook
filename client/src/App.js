import React from "react";
import { Name } from "./components/Name";
import { Board } from "./Board";

function App(props) {
  return (
    <>
      {props.gameState ? (
        <Board {...props} />
      ) : (
        <Name emitEvent={props.emitEvent} gameError={props.gameError} />
      )}
    </>
  );
}

export default App;
