import { Thead, Tr, Th } from "./style";
import SortButtons from "../SortButtons";

export default function TableHeader() {
  return (
    <Thead>
      <Tr>
        <Th>a</Th>
        <Th>
          g
          <SortButtons />
        </Th>
        <Th>
          v
          <SortButtons />
        </Th>
      </Tr>
    </Thead>
  );
}
