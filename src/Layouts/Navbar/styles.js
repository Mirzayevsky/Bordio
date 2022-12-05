import styled from "styled-components";
export const NavbarWrapper = styled.div`
  height: 80px;
  width: calc(100vw - 373px);
  box-shadow: 0px 2px 4px #f0f1f2;
  position: fixed;
  top: 0;
  left: 373px;
  display: flex;
  align-items: center;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;
export const ContentsWrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;
export const InputWrapper = styled.div`
  position: relative;
  margin-right: 25px;
  svg {
    fill: #8c939f;
    position: absolute;
    height: 12px;
    width: 12px;
    right: 15px;
    top: 14px;
    border-radius: 0px;
  }
`;

export const Notification = styled.div`
  position: relative;
  svg {
    height: 19px;
    width: 18px;
    margin-right: 25px;
  }
`;
export const MessageCount = styled.div`
    height: 20px;
    width: 24px;
    left: 9px;
    top: -11px;
    border-radius: 4px;
    position: absolute;
    background: linear-gradient(0deg, #f21247, #f21247),
    linear-gradient(0deg, #ffffff, #ffffff);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #fff;

  div {
    color: #ffffff;
    font-family: "Roboto";
    font-size: 10px;
    font-weight: 400;
    line-height: 10px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
export const UserAccount = styled.div`
  svg {
    height: 40px;
    width: 40px;
    margin-right: 27px;
  }
`;
