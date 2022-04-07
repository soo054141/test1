import { SortButtonWrapper, SortByHigh, SortByLow } from "./style";
import Polygon from "../../images/Polygon 1.png";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setSortHigh, setSortLow } from "../../store/app/appAction";

export default function SortButtons({ targetTable, columnKey, name }) {
  const dispatch = useDispatch();
  const sortHigh = useCallback(() => {
    dispatch(setSortHigh({ targetTable, columnKey, name }));
  }, [targetTable, columnKey, name]);

  const sortLow = useCallback(() => {
    dispatch(setSortLow({ targetTable, columnKey, name }));
  }, [targetTable, columnKey, name]);
  return (
    <SortButtonWrapper>
      <SortByHigh src={Polygon} onClick={sortHigh} />
      <SortByLow src={Polygon} onClick={sortLow} />
    </SortButtonWrapper>
  );
}
