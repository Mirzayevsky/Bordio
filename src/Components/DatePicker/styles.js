import styled from "styled-components";
export const DatepickerWrapper = styled.div`
width: 426px;
height: 278px;
display: flex;
background: white;
position: absolute;
top: 80px;
left: 0;
border: 1px solid black;
border-radius: 8px;
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
`;
export const Month = styled.div`
    width: 90%;
    margin: auto;
    font-family: 'Roboto';
    font-size: 14px;
    letter-spacing: 0px;
    color: rgb(34, 34, 34);
    padding: 10px 7px 9px;
    border-radius: 8px;
    height: 36px;
    box-sizing: border-box;
    box-sizing: border-box;
    text-align: left;
    &:hover{
        transition: 0.5s ease;
        background: rgb(245,248,250);
    }
    
`;
export const DayPicker = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 0px 24px;
    height: 46px;
    border-bottom: 1px solid rgb(242, 242, 242);
    box-sizing: border-box;
    background-color: rebeccapurple;

`;
export const Day = styled.div`
    color: rgb(140, 147, 159);
    text-align: center;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0px;
`;