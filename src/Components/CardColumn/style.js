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
export const TaskCard = styled.div`
  min-width: 266px !important;
  max-width: 266px !important;
  height: fit-content;
  min-height: 68.41px;
  border-radius: 8px;
  padding: 15px 11px;
  margin: 10px 0;
  position: relative;
  cursor: pointer;
`;
export const Cover = styled.div`
height: 100%;
width: 100%;
background-color: #F0F0F0;
position: absolute;
top: 0;
left: 0;
border-radius: 8px;
opacity: 60%;
z-index: 1;
`;
export const Title = styled.div`
font-family: 'Roboto';
font-size: 14px;
font-weight: 400;
line-height: 16px;
letter-spacing: 0em;
text-align: left;
`;
export const Date = styled.div`
font-family: 'Roboto';
font-size: 13px;
font-weight: 400;
line-height: 15px;
letter-spacing: 0em;
text-align: left;
margin-top: 5px;
`;

