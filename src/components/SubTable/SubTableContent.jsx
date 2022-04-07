import { Tbody, NameCell, FoxtrotCell, GolfCell } from "../TableContent/style";
import styled from "styled-components";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertSelectItem, deleteSelectItem } from "../../store/app/appAction";

const SubTableRow = styled.tr`
  width: 100%;
  display: flex;
  justify-content: space-between;
  ${({ selectRow }) => selectRow && "background-color: #C4C4C4;"};
`;

export default function SubTableContent({ data, name }) {
  const dispatch = useDispatch();
  const { selectMap } = useSelector((state) => state.app);
  const [id, foxtrot, golf] = useMemo(() => {
    return [data[0], data[1].toFixed(5), data[2].toFixed(5)];
  }, [data]);
  const [selectRow, setSelectRow] = useState(!!selectMap[`${name}${id}`]);

  useEffect(() => {
    setSelectRow(!!selectMap[`${name}${id}`]);
  }, [selectMap]);

  const toggleRow = useCallback(() => {
    if (!selectRow) {
      dispatch(insertSelectItem(`${name}${id}`));
    } else {
      dispatch(deleteSelectItem(`${name}${id}`));
    }
    setSelectRow(!selectRow);
  }, [selectRow]);
  return (
    <Tbody>
      <SubTableRow selectRow={selectRow} onClick={toggleRow}>
        <NameCell>{id}</NameCell>
        <FoxtrotCell>{foxtrot}</FoxtrotCell>
        <GolfCell>{golf}</GolfCell>
      </SubTableRow>
    </Tbody>
  );
}

SubTableContent.defaultProps = {
  data: { name: "dd", foxtrot: "bb", golf: "cc" },
};
