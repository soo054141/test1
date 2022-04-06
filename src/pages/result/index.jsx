import React, { useCallback } from "react";
import * as Results from "./style";
import TabHeader from "../../components/TabHeader";
import MainTable from "../../components/MainTable";
// import { useEffect } from "react";

export default function Result() {
  // const getDataFunc = useCallback(async () => {
  //   const response = await fetch(`http://testapi.hits.ai/result/`);
  //   if (response.ok) {
  //     const data = await response.json();
  //     console.log(data);
  //   }
  // }, []);

  // useEffect(() => {
  //   getDataFunc();
  // }, []);

  return (
    <Results.TabContents>
      <TabHeader />
      <Results.Divider />
      <MainTable />
    </Results.TabContents>
  );
}
