import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Loader = styled.div`
  border-radius: 50%;
  width: 20em;
  height: 20em;
  margin: 0 auto;
  margin-top: 40vh;
  font-size: 5px;
  position: relative;
  text-indent: -9999em;
  border-right: 1.1em solid rgba(106, 189, 140, 0.2);
  border-bottom: 1.1em solid rgba(106, 189, 140, 0.2);
  border-left: 1.1em solid #0d9991;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
    &:after {
      border-radius: 50%;
      width: 10em;
      height: 10em;
    }
  }
`;
