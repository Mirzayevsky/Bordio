import styled from "styled-components";
export const WorkSpaceWrapper = styled.div`
height:calc(100vh - 80px);
width:58%;
top: 80px;
left: 373px;
position: fixed;
border: 1px solid gray;
position: relative;
background-color: #fff;
overflow-x: auto;
`;
export const TitleWrapper = styled.div`
height: 61.4px;
background-color: #fff !important;
display: flex;
justify-content: space-between;
border-bottom: 1px solid #F3F3F3;
margin-bottom: 30px;
position: absolute;
top: 0;
left: 0;
`;
export const Title = styled.div`
min-width: 270px !important;
margin: 0 10px;
color: #222222;
font-family: 'Roboto';
font-size: 14px;
font-weight: 500;
line-height: 16px;
letter-spacing: 0em;
text-align: center;
background-color: #fff !important;
cursor: pointer;
`;
export const TasksWrapper = styled.div`
margin: auto;
display: flex;
margin-top: 85px;
&::before{
content: '';
height: 100%;
width: 1px;
background-color: red;
position: absolute;
top: 0;
left: -4%;
}
&:nth-child(1){
    &::before{
content: '';
height: 100%;
width: 1px;
background-color: unset;
position: absolute;
top: 0;
left: -4%;
}
}
`;