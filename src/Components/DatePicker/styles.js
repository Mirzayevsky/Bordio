import styled from "styled-components";
export const DatepickerWrapper = styled.div`
  width: 426px;
  height: 278px;
  display: flex;
  background: white;
  position: absolute;
  top: 47px;
  left: 0;
  border-radius: 8px;
  box-shadow: rgb(67 90 111 / 30%) 0px 0px 1px,
    rgb(67 90 111 / 47%) 0px 8px 10px -4px;
`;
export const MonthPicker = styled.div`
  height: 278px;
  width: 141px;
  border-right: 1px solid rgb(242, 242, 242);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  overflow: auto;
  padding:  6px 0;
`;
export const Month = styled.div`
  width: 90%;
  margin: auto;
  font-family: "Roboto";
  font-size: 14px;
  letter-spacing: 0px;
  color: rgb(34, 34, 34);
  padding: 10px 7px 9px;
  border-radius: 8px;
  height: 36px;
  box-sizing: border-box;
  box-sizing: border-box;
  text-align: left;
  &:hover {
    transition: 0.5s ease;
    background: rgb(245, 248, 250);
  }
`;
export const DayPicker = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const DayNameWrapper = styled.div`
  width: 100%;
  height: 46px;
  margin: 0 auto;
  border-radius: 0 8px 0 0px;
  display: flex;
  padding: 0 24px;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgb(242, 242, 242);
`;
export const DayName = styled.div`
  color: rgb(140, 147, 159);
  text-align: center;
  font-size: 13px;
  line-height: 14px;
  letter-spacing: 0px;
  font-weight: 300;
`;
export const DayWrapper = styled.div`
  width: 94%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  margin-left: 15px;
`;
export const Day = styled.div`
  height: 29px;
  width: 29px;
  border-radius: 50%;
  font-family: "Roboto";
  font-size: 14px;
  text-align: center;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  margin: 1px 5px;
  cursor: pointer;
`;
