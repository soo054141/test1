import { Thead, Tr, Th } from "./style";
import SortButtons from "../SortButtons";

export default function TableHeader() {
  return (
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>
          Foxtrot
          <SortButtons targetTable="main" columnKey="foxtrot" />
        </Th>
        <Th>
          Golf
          <SortButtons targetTable="main" columnKey="golf" />
        </Th>
      </Tr>
    </Thead>
  );
}
