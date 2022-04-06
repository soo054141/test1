import { Tbody, NameCell, FoxtrotCell, GolfCell } from "../TableContent/style";
import styled from "styled-components";

const SubTableRow = styled.tr`
  width: 100%;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export default function SubTableContent({ data }) {
  return (
    <Tbody>
      <SubTableRow>
        <NameCell>1</NameCell>
        <FoxtrotCell>-9.123</FoxtrotCell>
        <GolfCell>-9.123</GolfCell>
      </SubTableRow>
    </Tbody>
  );
}

SubTableContent.defaultProps = {
  data: { name: "dd", foxtrot: "bb", golf: "cc" },
};
