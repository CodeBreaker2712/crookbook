import React from "react";

export default function Table({ points, names, totalPoints }) {
  let tableHeader = (
    <tr key={0} scope="col">
      <th>No.</th>
      {names.map((n) => (
        <th key={n}>{n}</th>
      ))}
    </tr>
  );
  let length = names.length;
  let table = [];
  for (let i = 0; i < 10; i++)
    table.push(
      <tr key={i + 1}>
        <th scope="row">{i + 1}</th>
        {[...Array(length)].map((_, j) => (
          <td key={j}>{points[i]&&points[i][j]||' '}</td>
        ))}
      </tr>
    );
  let tableFooter = (
    <tr>
      <th>Tot.</th>
      {totalPoints.map((sum, j) => (
        <td key={j}>{sum}</td>
      ))}
    </tr>
  );
  return (
    <table className="table table-bordered text-center font-base bg-table">
      <thead>{tableHeader}</thead>
      <tbody>{table}</tbody>
      <tfoot>{tableFooter}</tfoot>
    </table>
  );
}
