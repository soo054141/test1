import { SortButtonWrapper, SortByHigh, SortByLow } from "./style";
import Polygon from "../../images/Polygon 1.png";

export default function SortButtons() {
  return (
    <SortButtonWrapper>
      <SortByHigh src={Polygon} />
      <SortByLow src={Polygon} />
    </SortButtonWrapper>
  );
}
