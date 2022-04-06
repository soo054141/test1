import { Wrapper, Table } from "./style";
import TableHeader from "../TableHeader";
import TableContent from "../TableContent";

export default function MainTable() {
  return (
    <Wrapper>
      <Table>
        <TableHeader />
        <TableContent />
      </Table>
    </Wrapper>
  );
}
