import React from "react";
import * as Results from "./style";
import TabHeader from "../../components/tabHeader";
import TableHeader from "../../components/tableHeader";
import TableContent from "../../components/tableContent";

export default function Result() {
  const columns = ["Name", "Foxtrot", "Golf"];
  const data = Array(5)
    .fill()
    .map(() => ({
      name: 1,
      foxtrot: "ㅎㅎ",
      golf: "golf",
    }));

  return (
    <Results.TabContents>
      <TabHeader />
      <Results.Divider />
      <TableHeader columns={columns} data={data} />
      <TableContent />
    </Results.TabContents>
  );
}
