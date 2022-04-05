import React from "react";
import * as Results from "./style";
import TabHeader from "../../components/tabHeader";
import TableHeader from "../../components/tableHeader";
import TableContent from "../../components/tableContent";

export default function Result() {
  return (
    <Results.TabContents>
      <TabHeader />
      <TableHeader />
      <TableContent />
    </Results.TabContents>
  );
}
