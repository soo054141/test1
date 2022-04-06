import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Thead = styled.thead`
  display: flex;
  gap: 5px;
  font-size: 24px;
  font-weight: 700;
`;

export const Tr = styled.tr`
  width: 100%;
  height: 61px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Th = styled.th`
  width: 278px;
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
