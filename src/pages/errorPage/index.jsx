import styled from "styled-components";

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 35px;
  width: 82.777vw;
  height: 300px;
  margin: 0 auto;
  text-align: center;
  margin-top: 79px;
`;

const ErrorCode = styled.h1`
  font-weight: 700;
  font-size: 170px;
`;

const Message = styled.h3`
  font-size: 50px;
  color: #c5c5c5;
`;

export const Check = styled.button`
  font-size: 18px;
  padding: 10px;
  border: 1px solid;
  box-sizing: border-box;
  background-color: #fff;
  border-color: #7879f1;
  color: #7879f1;
  line-height: 22px;
`;

export default function Error() {
  return (
    <ErrorWrapper>
      <ErrorCode>404</ErrorCode>
      <Message>OOPS, SORRY WE CAN'T FIND THAT PAGE!</Message>
      <Check>Go Home</Check>
    </ErrorWrapper>
  );
}
