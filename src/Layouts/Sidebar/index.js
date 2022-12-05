import React from "react";
import {
    Container,
  Input,
  InputWrapper,
  LinkWrapper,
  Logo,
  SidebarWrapper,
  Link,
  UserSvgWrapper,
  SeachSvgWrapper
} from "./styles";
import { ReactComponent as LogoSvg } from "../../assets/bordio-logo.svg";
import { ReactComponent as UserSvg } from "../../assets/Ellipse 1.svg";
import { ReactComponent as SeachSvg } from "../../assets/kontur.svg";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Logo>
        <LogoSvg />
      </Logo>
      <InputWrapper>
        <Input name={"search"} placeholder={"Search"} />
        <SeachSvgWrapper>
          <SeachSvg/>
        </SeachSvgWrapper>
      </InputWrapper>
      <Container>
      <LinkWrapper>
      <UserSvgWrapper>
        <UserSvg/>
      </UserSvgWrapper>
      <Link>My workspace</Link>
      </LinkWrapper>
      </Container>
    </SidebarWrapper>
  );
};

export default Sidebar;
