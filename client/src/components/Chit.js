import React from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Player } from "./Player";

export const Chit = (props) => {
  const { role: userRole } = props.gameState.players.find(
    ({ id }) => id === props.gameState.user
  );
  const selected = (id) => () => {
    if (props.gameState.gameState === "STARTED" && props.gameState.canSelect) {
      if (userRole === "KNIGHT") {
        props.emitEvent("selection", id);
      }
    }
  };
  return (
    <>
      <Row>
        {props.gameState.players.map((p) => (
          <Player
            key={p.id}
            name={p.playername}
            role={p.role}
            onClick={selected(p.id)}
          />
        ))}
      </Row>
      <Button
        variant="primary"
        onClick={() => props.emitEvent("pick")}
        className="m-2"
      >
        Pick Chits
      </Button>
      {!props.gameState.canSelect ? (
        <Button
          variant="primary"
          onClick={() => props.emitEvent("startround")}
          className="m-2"
        >
          Start Round
        </Button>
      ) : null}
    </>
  );
};
