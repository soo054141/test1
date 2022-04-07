import { Tbody, TableRow, NameCell, FoxtrotCell, GolfCell } from "./style";
import SubTable from "../SubTable";
import { useEffect, useState, useMemo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getResultByName } from "../../store/app/appAction";

export default function TableContent({ content }) {
  const dispatch = useDispatch();
  const [name, foxtrot, golf] = useMemo(() => {
    return [content[0], content[1].toFixed(5), content[2].toFixed(5)];
  }, [content]);
  const subTableData = useSelector(
    (state) => state.app.resultByName[name],
    shallowEqual,
  );
  const [activeSub, setActiveSub] = useState(false);

  useEffect(() => {
    if (activeSub && !subTableData) {
      dispatch(getResultByName(name));
    }
  }, [activeSub]);

  return (
    <Tbody>
      <TableRow onClick={() => setActiveSub(!activeSub)}>
        <NameCell>
          <span>{name}</span>
        </NameCell>
        <FoxtrotCell>{foxtrot}</FoxtrotCell>
        <GolfCell>{golf}</GolfCell>
      </TableRow>
      {activeSub && (
        <TableRow>
          <SubTable subTableData={subTableData} name={name} />
        </TableRow>
      )}
    </Tbody>
  );
}
