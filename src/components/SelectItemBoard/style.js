import styled from "styled-components";

export const StyledSelectItemBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 82.083vw;
  gap: 13px;
  margin-top: 10px;
  background-color: #9ed6d3;
`;

export const ItemRow = styled.div`
  padding: 12px 19px;
  display: flex;
  align-items: center;
  gap: 13px;
`;

export const ItemKey = styled.span`
  width: 140px;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
`;

export const DeleteButton = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;
