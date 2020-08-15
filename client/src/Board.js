import React from "react";
import Container from "react-bootstrap/Container";
import { Chit } from "./components/Chit";
import { ScoreBoard } from "./components/ScoreBoard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Board = (props) => {
  let jsx = <h1>Waiting</h1>;
  if (props.gameState) {
    jsx = (
      <Container>
        <Row>
          <Col lg={7}>
            <Chit {...props} />
          </Col>
          <Col lg={5}>
            <ScoreBoard points={props.gameState.points} players={props.gameState.players} />
          </Col>
        </Row>
      </Container>
    );
  }
  return jsx;
};
