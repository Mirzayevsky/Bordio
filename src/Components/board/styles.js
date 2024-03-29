import styled from "styled-components";

export const TaskContent = styled.div`
  height: calc(100vh - 80px);
  width: 80%;
  top: 0;
  left: 0;
  position: absolute; 
  border-right: 1px solid #f3f3f3;
  background-color: #fff;
  overflow: auto;
  &:nth-last-child(){
    border-right: 0;
  }
`;


export const Header = styled.div`
  height: 61.4px;
  width: fit-content;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 999;
  background: #ffff;
`;

export const TitleWrapper = styled.div`
  min-width: 270px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 12px;
  margin: 0 20px;
  position: relative;
`;
export const Wrapper = styled.div`
  width: fit-content;
  margin: auto;
  display: flex;
  align-items: center;
`;
export const Title = styled.div`
  color: #222222;
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  background-color: #fff !important;
  cursor: pointer;
`;
export const TaskCount = styled.div`
  padding: 7px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e8ebef;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: right;
  margin-left: 5px;
`;
export const TasksWrapper = styled.div`
  margin: auto;
  display: flex;
  margin-top: 28px;
  margin-right: 20px;
`;