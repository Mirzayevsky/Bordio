import styled from "styled-components";
export const CardWrapper = styled.div`
  margin: 0 10px;
  height: 100%;
  position: relative;
  &::before {
    content: "";
    height: 132%;
    width: 1px;
    background: #f3f3f3;
    position: absolute;
    top: -20px;
    left: -4%;
    z-index: 2px;
  }
  &:nth-child(1) {
    &::before {
      content: "";
      height: 100%;
      width: 1px;
      background-color: unset;
      position: absolute;
      top: 0;
      left: -4%;
    }
  }
  &:nth-child(1) {
    margin-left: 20px;
  }
`;
export const TaskCard = styled.div`
  min-width: 266px !important;
  height: 68.41px;
  border-radius: 8px;
  padding: 15px;
  margin: 10px 0;
  cursor: pointer;
  background-color: royalblue;
  &:nth-child(1) {
    background-color: lightgray;
  }
  &:nth-child(2) {
    background-color: blue;
  }
  &:nth-child(3) {
    background-color: rebeccapurple;
  }
  &:nth-child(4) {
    background-color: lightgreen;
  }
`;
