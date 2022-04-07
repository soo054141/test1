import styled from "styled-components";
import { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 48px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
`;

export const ResultTool = styled.div`
  display: flex;
  gap: 26px;
`;

export const SearchForm = styled.div``;

const toolStyle = css`
  height: 55px;
  background: #ffffff;
  border: 1px solid #7879f1;
  box-sizing: border-box;
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  color: #7879f1;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  ${toolStyle}
  width: 284px;
  line-height: 29px;
  color: #000;

  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  ${toolStyle}
  width: 106px;
  color: #7879f1;
`;
export const DownloadButton = styled.button`
  ${toolStyle}
  width: 132px;
`;
