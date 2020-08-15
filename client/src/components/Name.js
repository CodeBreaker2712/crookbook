import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { parse } from "querystring";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import { withRouter } from "react-router-dom";

export const Name = withRouter((props) => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    const { gameId = null } = parse(props.location.search.substring(1));
    if (gameId) setId(gameId);
  }, [props.location.search]);
  const joinGame = (e) => {
    if (name.length && id.length) {
      props.emitEvent("joingame", { playername: name, gameid: id });
      props.history.push({ pathname: "/", search: `?gameId=${id}` });
    }
  };
  const createGame = () => {
    if (name.length && id.length) {
      props.emitEvent("creategame", { playername: name, gameid: id });
      props.history.push({ pathname: "/", search: `?gameId=${id}` });
    }
  };
  return (
    <React.Fragment>
      <Container
        className="text-center d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <Card
          className="card-body shadow-lg"
          style={{
            maxWidth: "500px",
            margin: "1em auto",
            background: "rgba(0,0,0,.6)",
            borderRadius: "20px",
          }}
        >
          <form onSubmit={(e) => e.preventDefault()}>
            <label>Name</label>
            <FormControl
              required
              placeholder="Enter your name"
              className="mb-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Game Id</label>
            <FormControl
              required
              placeholder="Enter game id"
              className="mb-3"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <Button
              type="submit"
              variant="success"
              className="mx-1"
              onClick={joinGame}
            >
              Enter
            </Button>
            <Button
              type="submit"
              variant="success"
              className="mx-1"
              onClick={createGame}
            >
              Create New Game
            </Button>
          </form>
          {props.gameError ? (
            <Alert variant="danger" className="mb-0 mt-3">
              {props.gameError}
            </Alert>
          ) : null}
        </Card>
      </Container>
    </React.Fragment>
  );
});
