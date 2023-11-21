import styled from "styled-components";
export const StatusWrapper = styled.div`
  width: 300px;
  height: calc(100vh - 80px);
  position: fixed;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 999999999;
 
`;
export const Header = styled.div`
  height: 61.4px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: left;
  position: relative;

  svg {
    height: 14px;
    width: 13px;
    margin-top: 4%;
    margin-left: 30px;
    position: absolute;
    path {
      fill: #8c939f;
    }
  }
  &::before {
    content: "";
    position: absolute;
    right: 0;
    top: 61.4px;
    height: 1px;
    width: calc(100vw - 373px);
    background-color: #f3f3f3;
    z-index: 999;
  }
`;
export const Input = styled.input`
  height: 100%;
  width: 90%;
  margin-left: auto;
  border: 0;
  outline: none;
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  display: flex;
  margin-left: 20px;
  color: #8c939f;
  cursor: pointer;
  padding: 0 29px;
  padding-top: 15px;
`;
