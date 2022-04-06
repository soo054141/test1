import { Thead, Tr, Th } from "../TableHeader/style";
import SortButtons from "../SortButtons";

export default function SubTableHeader() {
  return (
    <Thead>
      <Tr>
        <Th>id</Th>
        <Th>
          Foxtrot
          <SortButtons />
        </Th>
        <Th>
          Golf
          <SortButtons />
        </Th>
      </Tr>
    </Thead>
  );
}
