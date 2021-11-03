import * as React from "react";
import {
  dwarfesTotal,
  dwarfesDeviation,
  jolfesDeviation,
  jolfesTotal,
  firstStratagyAverageDeviation,
  firstStratagyAverageFeatsCount,
  firstStratagyAverageTotal,
  secondStratagyAverageDeviation,
  secondStratagyAverageFeatsCount,
  secondStratagyAverageTotal
} from ".";

export const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Раса</th>
          <th>сумма черт</th>
          <th>девиантность</th>
          <th>число черт</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>дворфы</td>
          <td>{dwarfesTotal}</td>
          <td>{dwarfesDeviation}</td>
          <td>10</td>
        </tr>
        <tr>
          <td>йольфы</td>
          <td>{jolfesTotal}</td>
          <td>{jolfesDeviation}</td>
          <td>10</td>
        </tr>
        <tr>
          <td>гибрид 1</td>
          <td>{firstStratagyAverageTotal}</td>
          <td>{firstStratagyAverageDeviation}</td>
          <td>{firstStratagyAverageFeatsCount}</td>
        </tr>
        <tr>
          <td>гибрид 2</td>
          <td>{secondStratagyAverageTotal}</td>
          <td>{secondStratagyAverageDeviation}</td>
          <td>{secondStratagyAverageFeatsCount}</td>
        </tr>
      </tbody>
    </table>
  );
};
