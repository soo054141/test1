import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 48px;
`;

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

export const ArrowWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  flex-direction: column;
  margin-left: 8px;
  margin-top: 2px;
`;

export const ArrowTop = styled.img``;

export const ArrowBottom = styled.img`
  transform: rotate(180deg);
`;

export const Tbody = styled.tbody`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-top: 1px solid #000;

  tr {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }
  td {
    background-color: #ffffff;
    height: 61px;
    width: 278px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 700;

    span {
      padding: 5px 40px;
      border: 1px solid #0d9991;
      color: #0d9991;
    }
  }
`;
