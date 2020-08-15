import React from "react";
import Table from "react-bootstrap/Table";

export function ScoreBoard({ points, players }) {
  let tableHeader = (
    <tr key={0}>
      <th>No.</th>
      {players.map(({ playername }) => (
        <th className="text-center" key={playername}>
          {playername}
        </th>
      ))}
    </tr>
  );
  let length = players.length;
  let table = [];
  for (let i = 0; i < 10; i++)
    table.push(
      <tr key={i + 1}>
        <th scope="row">{i + 1}</th>
        {[...Array(length)].map((_, j) => (
          <td className="text-center" key={j}>
            {(points[i] && `${points[i][j]}`) || " "}
          </td>
        ))}
      </tr>
    );
  let tableFooter = (
    <tr>
      <th>Tot.</th>
      {players.map(({ totalPoints, id }) => (
        <td className="text-center" key={id}>
          {totalPoints}
        </td>
      ))}
    </tr>
  );
  return (
    <Table variant="dark" striped>
      <thead>{tableHeader}</thead>
      <tbody>{table}</tbody>
      <tfoot>{tableFooter}</tfoot>
    </Table>
  );
}
