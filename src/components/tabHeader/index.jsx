import React, { useState } from "react";
import {
  Wrapper,
  Title,
  ResultTool,
  SearchForm,
  SearchInput,
  SearchButton,
  DownloadButton,
} from "./style";

export default function TabHeader({ setFilterKeyword }) {
  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <Wrapper>
      <Title>Result</Title>
      <ResultTool>
        <SearchForm action="">
          <SearchInput
            type="text"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <SearchButton
            onClick={() => setFilterKeyword(searchKeyword.toLowerCase())}
          >
            search
          </SearchButton>
        </SearchForm>
        <DownloadButton>download</DownloadButton>
      </ResultTool>
    </Wrapper>
  );
}
