import { Wrapper, Table } from "./style";
import TableHeader from "../TableHeader";
import TableContent from "../TableContent";
import { shallowEqual, useSelector } from "react-redux";
import React from "react";

export default function MainTable({ filterKeyword }) {
  const result = useSelector((state) => state.app.result, shallowEqual);

  return (
    <Wrapper>
      <Table>
        <TableHeader />
        {result &&
          React.Children.toArray(
            result
              .filter((data) =>
                filterKeyword === ""
                  ? true
                  : data[0].toLowerCase().includes(filterKeyword),
              )
              .map((row) => <TableContent content={row} />),
          )}
      </Table>
    </Wrapper>
  );
}
