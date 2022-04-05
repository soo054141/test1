import React from "react";
import {
  Wrapper,
  Title,
  ResultTool,
  SearchForm,
  SearchInput,
  SearchButton,
  DownloadButton,
} from "./style";

export default function TabHeader() {
  return (
    <Wrapper>
      <Title>Result</Title>
      <ResultTool>
        <SearchForm action="">
          <SearchInput type="text" />
          <SearchButton type="submit">search</SearchButton>
        </SearchForm>
        <DownloadButton>download</DownloadButton>
      </ResultTool>
    </Wrapper>
  );
}
