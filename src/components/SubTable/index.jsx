import {
  SubTableWrapper,
  SelectBtnWrapper,
  Check,
  Clear,
  Table,
} from "./style";
import SubTableHeader from "./SubTableHeader";
import SubTableContent from "./SubTableContent";

export default function SubTable() {
  return (
    <SubTableWrapper>
      <SelectBtnWrapper>
        <Check>check all</Check>
        <Clear>clear</Clear>
      </SelectBtnWrapper>
      <Table>
        <SubTableHeader />
        <SubTableContent />
      </Table>
    </SubTableWrapper>
  );
}
