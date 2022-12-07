import styled from "styled-components";
export const SidebarWrapper = styled.div`
width: 219px;
height: 100vh;
background: #0F1D40;
position: fixed;
top: 0;
left: 0;

`;
export const Logo = styled.div`
height: 32px;
width: 131px;
margin-left: 16px;
margin-top: 26px;
border-radius: 0px;
`;
export const InputWrapper = styled.div`
height: 32px;
width: 187px;
margin-left: 16px;
border-radius: 4px;
margin-top: 28px;
position: relative;

`;
export const Input = styled.input`
height: 100%;
width: 100%;
border-radius: 4px;
background: #2D4071;
border: 0;
outline: 0;
color: #fff;
padding: 0  10px;
position: relative;
`;
export const Container = styled.div`
width: 100%;
margin: auto;
`;
export const LinkWrapper = styled.div`
width: 100%;
height: 34px;
display: flex;
align-items: center;
margin-top: 20px;
color: #FFFFFF;
background: #2D4071;
cursor: pointer;
`;
export const UserSvgWrapper = styled.div`
height: 25px;
width: 25px;
margin-left: 16px;

svg{
width: 100%;
height: 100%;
}
`;
export const Link = styled.div`
color: #fff;
font-family: 'Roboto';
font-size: 15px;
font-weight: 400;
line-height: 16px;
letter-spacing: 0em;
text-align: left;
margin-left: 15px;
`;
export const SeachSvgWrapper = styled.div`
height: 12px;
width: 12px;
border-radius: 0px;
position: absolute;
top: 7px;
right: 11px;

svg{
    height: 100%;
    width: 100%;
}
`;
export const Wrapper = styled.div`
width: 100%;
margin: auto;
margin-top: 20px;
color: #fff;
font-family: 'Roboto';
font-size: 15px;
font-weight: 400;
line-height: 16px;
letter-spacing: 0em;
text-align: left;
svg{
    width: 10px;
    height: 5px;
    margin-left: 23px;
    path{
        fill: #fff;
    }
}
`;
export const DropLink = styled.div`
display: flex;
align-items: center;
p{
    margin-left: 20px;
}

`;
export const DropDownWrapper = styled.div`
color: #8C939F;
font-family: 'Roboto';
font-size: 15px;
font-weight: 400;
line-height: 16px;
text-align: left;



`;

export const DropDown = styled.div`
 margin-top: 20px;
 margin-left: 16px;
 &:nth-child(1){
    margin-top: 25px;
}
`;