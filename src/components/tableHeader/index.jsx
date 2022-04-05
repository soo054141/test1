import React from "react";
import { Wrapper, Table, Thead, Tr, Th, Tbody } from "./style";

export default function TableHeader({ columns, data }) {
  return (
    <Wrapper>
      <Table>
        <Thead>
          <Tr>
            {columns.map((col) => (
              <Th key={col}>{col}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map(({ name, foxtrot, golf }) => (
            <tr key={name + foxtrot + golf}>
              <td>{name}</td>
              <td>{foxtrot}</td>
              <td>{golf}</td>
            </tr>
          ))}
        </Tbody>
      </Table>
      I'm TableHeader
    </Wrapper>
  );
}
