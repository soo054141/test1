import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 48px;
  border: 1px solid gold;
`;

export const Table = styled.table`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: red;
`;

export const Thead = styled.thead`
  display: flex;
  gap: 5px;
  background-color: pink;
  font-size: 24px;
  font-weight: 700;
`;

export const Tr = styled.tr`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  /* gap: 156px; */
`;

export const Th = styled.th`
  width: 278px;
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: skyblue;
`;

export const Tbody = styled.tbody`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 82.083vw;
  border-top: 1px solid #000;
  margin-top: 18px;

  & > tr {
    background-color: purple;
    margin-top: 26px;
  }
`;
