import {
  SubTableWrapper,
  SelectBtnWrapper,
  Check,
  Clear,
  Table,
} from "./style";
import SubTableHeader from "./SubTableHeader";
import SubTableContent from "./SubTableContent";
import React, { useCallback } from "react";
import {
  insertSelectItemAll,
  deleteSelectItemAll,
} from "../../store/app/appAction";
import { useDispatch } from "react-redux";

export default function SubTable({ subTableData, name }) {
  const dispatch = useDispatch();
  const checkAll = useCallback(() => {
    const payload = {};
    subTableData.forEach((data) => {
      payload[`${name}${data[0]}`] = true;
    });
    dispatch(insertSelectItemAll(payload));
  }, [dispatch, subTableData, name]);

  const clearAll = useCallback(() => {
    dispatch(deleteSelectItemAll(name));
  }, [dispatch, name]);
  return (
    <SubTableWrapper>
      <SelectBtnWrapper>
        <Check onClick={checkAll}>check all</Check>
        <Clear onClick={clearAll}>clear</Clear>
      </SelectBtnWrapper>
      <Table>
        <SubTableHeader name={name} />
        {subTableData &&
          React.Children.toArray(
            subTableData.map((data) => (
              <SubTableContent name={name} data={data} />
            )),
          )}
      </Table>
    </SubTableWrapper>
  );
}
