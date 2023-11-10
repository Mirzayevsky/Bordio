import styled from "styled-components";
export const Wrapper = styled.div`
  min-width: 266px !important;
  max-width: 266px !important;
  height: fit-content;
  min-height: 68.41px;
  border-radius: 8px;
  padding: 15px 11px;
  margin: 10px 0;
  position: relative;
background-color: lightblue;
  &:hover {
    cursor: grab;
  }
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

