import styled, { css } from "styled-components";

export const Tbody = styled.tbody`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: column;
  border-top: 1px solid #000;
`;

export const TableRow = styled.tr`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

const CellStyles = css`
  height: 61px;
  width: 278px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
`;

export const NameCell = styled.td`
  ${CellStyles}

  span {
    padding: 5px 40px;
    border: 1px solid #0d9991;
    color: #0d9991;
  }
`;

export const FoxtrotCell = styled.td`
  ${CellStyles}
`;

export const GolfCell = styled.td`
  ${CellStyles}
`;
