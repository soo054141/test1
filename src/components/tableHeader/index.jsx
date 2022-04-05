import {
  Wrapper,
  Table,
  Thead,
  Tr,
  Th,
  ArrowWrapper,
  ArrowTop,
  ArrowBottom,
  Tbody,
} from "./style";
import Polygon from "../../images/Polygon 1.png";

export default function TableHeader({ columns, data }) {
  return (
    <Wrapper>
      <Table>
        <Thead>
          <Tr>
            <Th key={columns[0]}>{columns[0]}</Th>
            <Th key={columns[1]}>
              {columns[1]}
              <ArrowWrapper>
                <ArrowTop src={Polygon} />
                <ArrowBottom src={Polygon} />
              </ArrowWrapper>
            </Th>
            <Th key={columns[2]}>
              {columns[2]}
              <ArrowWrapper>
                <ArrowTop src={Polygon} />
                <ArrowBottom src={Polygon} />
              </ArrowWrapper>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map(({ name, foxtrot, golf }) => (
            <tr key={name + foxtrot + golf}>
              <td key={name}>
                <span>{name}</span>
              </td>
              <td key={foxtrot}>{foxtrot}</td>
              <td key={golf}>{golf}</td>
            </tr>
          ))}
        </Tbody>
      </Table>
    </Wrapper>
  );
}
