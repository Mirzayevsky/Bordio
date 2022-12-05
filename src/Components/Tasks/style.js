import styled from "styled-components";
export const TaskWrapper = styled.div`
margin: 0 10px;
height: 100%;
position: relative;
background-color: lightgreen;
&:nth-child(1){
margin-left: 20px;
}

`;
export const Card = styled.div`
min-width: 266px !important;
height: 68.41px;
border-radius: 8px;
padding: 15px;
margin: 10px 0;
cursor: pointer;
&:nth-child(1){
    background-color: lightgray;
}
&:nth-child(2){
    background-color: blue;
}
&:nth-child(3){
    background-color: rebeccapurple;
}
&:nth-child(4){
    background-color: lightgreen;
}
`;
