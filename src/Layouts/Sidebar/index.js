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
  SeachSvgWrapper,
  DropDownWrapper,
  DropDown,
  Wrapper,
  DropLink,
} from "./styles";
import { ReactComponent as LogoSvg } from "../../assets/bordio-logo.svg";
import { ReactComponent as UserSvg } from "../../assets/Ellipse 1.svg";
import { ReactComponent as SeachSvg } from "../../assets/kontur.svg";
import { ReactComponent as DownSvg } from "../../assets/downSvg.svg";


const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Logo>
        <LogoSvg />
      </Logo>
      <InputWrapper>
        <Input name={"search"} placeholder={"Search"} />
        <SeachSvgWrapper>
          <SeachSvg />
        </SeachSvgWrapper>
      </InputWrapper>
      <Container>
        <LinkWrapper>
          <UserSvgWrapper>
            <UserSvg />
          </UserSvgWrapper>
          <Link>My workspace</Link>
        </LinkWrapper>

        <Wrapper>
          <DropLink>
            <DownSvg/> <p>Favorites</p>
          </DropLink>
          <DropDownWrapper>
            <DropDown>Marketing</DropDown>
            <DropDown>Mobile App</DropDown>
          </DropDownWrapper>
        </Wrapper>
        <Wrapper>
          <DropLink>
            <DownSvg/> <p>My Projects</p>
          </DropLink>
          <DropDownWrapper>
            <DropDown>Marketing</DropDown>
            <DropDown>Landing Pages</DropDown>
            <DropDown>Wedding</DropDown>
            <DropDown>Mobile App</DropDown>
            <DropDown>House Construction</DropDown>

          </DropDownWrapper>
        </Wrapper>
      </Container>
    </SidebarWrapper>
  );
};

export default Sidebar;
