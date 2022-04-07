import styled, { css } from "styled-components";

export const SubTableWrapper = styled.div`
  width: 75.555vw;
  margin: 0 auto;
`;

export const SelectBtnWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const selectBtnStyles = css`
  width: 102px;
  height: 34px;
  border: 1px solid;
  box-sizing: border-box;
  background-color: #fff;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
`;

export const Check = styled.button`
  ${selectBtnStyles}
  border-color:#7879f1;
  color: #7879f1;
`;

export const Clear = styled.button`
  ${selectBtnStyles}
  border-color: rgba(255, 0, 0, 0.65);
  color: rgba(255, 0, 0, 0.65);
`;

export const Table = styled.table`
  display: flex;
  flex-direction: column;
`;
