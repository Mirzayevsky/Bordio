import styled from "styled-components";
export const ButtonWrapper = styled.div`
margin-left: 10px;
padding: 8px 20px;
border-radius: 50px;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
font-family: 'Roboto';
font-size: 14px;
font-weight: 400;
line-height: 16px;
letter-spacing: 0em;
text-align: right;
cursor: pointer;
position: relative;
transition: .8s;
.down{
    height: 5px;
    width: 10px;
}
.drop_true{
        display: none ;
}
&:hover{
    .drop_true{
        display: block !important;
    }
}
`;

export const DropDownWrapper = styled.div`
display: none;
height: 132px;
width: 132px;
position: absolute;
top: 110%;
left: 0;
border-radius: 8px;
padding: 6px;
background-color: #fff;
box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
`;
export const DropDownItem = styled.div`
height: 16px;
width: 69px;
height: calc(100% / 3);
text-align: left;
border-radius: 4px;
width: 120px;
margin: auto;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
padding-top: 12px;
padding-left: 10px;
&:hover {
 background: #F5F8FA;

}
`;
export const InputInner = styled.input`
border-radius: 50px;
outline: none;
border: 0;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
padding: 0 15px;
`;
