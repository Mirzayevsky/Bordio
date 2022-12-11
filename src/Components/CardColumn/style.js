import styled from "styled-components";
export const CardWrapper = styled.div`
  margin: 0 22px;
  height: 100%;
  position: relative;
  z-index: -1px;
  &::before {
    content: "";
    height: calc(100vh - 160px);
    width: 1px;
    background: #F3F3F3;
    position: absolute;
    top: -27px;
    left: -22px;
    z-index: 99px;
  }
  &:nth-child(1) {
    &::before {
      content: "";
      height: 100%;
      width: 1px;
      background-color: unset;
      position: absolute;
      top: 0;
      left: -7%;
    }
  }
  &:nth-child(1) {
    margin-left: 21.5px;
  }
`;
