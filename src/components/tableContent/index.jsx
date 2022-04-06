import { Tbody, TableRow, NameCell, FoxtrotCell, GolfCell } from "./style";
import SubTable from "../SubTable";
import { useState } from "react";

export default function TableContent() {
  const [activeSub, setActiveSub] = useState(false);

  return (
    <Tbody>
      <TableRow onClick={() => setActiveSub(!activeSub)}>
        <NameCell>
          <span>ddd</span>
        </NameCell>
        <FoxtrotCell>e</FoxtrotCell>
        <GolfCell>e</GolfCell>
      </TableRow>
      {activeSub && (
        <TableRow>
          <SubTable />
        </TableRow>
      )}
    </Tbody>
  );
}
