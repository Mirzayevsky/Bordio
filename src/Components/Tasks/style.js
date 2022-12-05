import styled from "styled-components";
export const TaskWrapper = styled.div`
width: 100%;
height: 100%;
overflow: auto;
`;
export const TitleWrapper = styled.div`
height: 61.4px;
background-color: #fff !important;
display: flex;
justify-content: space-between;
border-bottom: 1px solid #F3F3F3;
margin-left: 15px;
margin-bottom: 30px;

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
padding-top: 26px;
`;

export const CardWrapper = styled.div`
display: flex;
justify-content: space-between;
margin-left: 20px;
background-color: #222222;


`;
export const Card = styled.div`
height: 68.4px;
min-width: 270px !important;
border-radius: 8px;
padding: 15px;
background-color: red;
margin: 10px;
cursor: pointer;
`;
