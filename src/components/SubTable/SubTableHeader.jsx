import { Thead, Tr, Th } from "../TableHeader/style";
import SortButtons from "../SortButtons";

export default function SubTableHeader({ name }) {
  return (
    <Thead>
      <Tr>
        <Th>id</Th>
        <Th>
          Foxtrot
          <SortButtons targetTable="sub" columnKey="foxtrot" name={name} />
        </Th>
        <Th>
          Golf
          <SortButtons targetTable="sub" columnKey="golf" name={name} />
        </Th>
      </Tr>
    </Thead>
  );
}
