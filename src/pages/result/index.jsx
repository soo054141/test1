import React, { useEffect, useState } from "react";
import * as Results from "./style";
import TabHeader from "../../components/TabHeader";
import MainTable from "../../components/MainTable";
import { useDispatch } from "react-redux";
import { getResult } from "../../store/app/appAction";
import SelectItemBoard from "../../components/SelectItemBoard";

export default function Result() {
  const dispatch = useDispatch();
  const [filterKeyword, setFilterKeyword] = useState("");

  useEffect(() => {
    dispatch(getResult());
  }, [dispatch]);

  return (
    <Results.TabContents>
      <Results.FixedItems>
        <TabHeader setFilterKeyword={setFilterKeyword} />
        <Results.Divider />
      </Results.FixedItems>
      <SelectItemBoard />
      <MainTable filterKeyword={filterKeyword} />
    </Results.TabContents>
  );
}
