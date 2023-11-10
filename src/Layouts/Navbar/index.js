import React from "react";
import { useState } from "react";
import {
  NavbarWrapper,
  ButtonWrapper,
  ContentsWrapper,
  InputWrapper,
  Notification,
  UserAccount,
  MessageCount,
} from "./styles";
import { Button, Input } from "../../Components/styles/index";
import { ReactComponent as PlusSvg } from "../../assets/plusBtn.svg";
import { ReactComponent as DownSvg } from "../../assets/downSvg.svg";
import { ReactComponent as SearchSvg } from "../../assets/kontur.svg";
import { ReactComponent as XSvg } from "../../assets/x.svg";
import { ReactComponent as BellSvg } from "../../assets/bxs-bell.svg";
import { ReactComponent as UserSvg } from "../../assets/Ellipse 1.svg";
import { data } from "../../data";
import DatePicker from "../../Components/DatePicker";

const Navbar = () => {
  // const [filteredData, setFilteredData] = useState(data);
  // const [wordEntered, setWordEntered] = useState("");
  // const [open, setOpen] = useState(false);

  // const handleFilter = (event) => {
  //   const searchWord = event.target.value;
  //   setWordEntered(searchWord);
  //   const newFilter = []?.filter((value) => {
  //     return value.title.toLowerCase().includes(searchWord.toLowerCase());
  //   });

  //   if (searchWord === "") {
  //     setFilteredData([]);
  //   } else {
  //     setFilteredData(newFilter);
  //   }
  // };
  // const clearInput = () => {
  //   setFilteredData([]);
  //   setWordEntered("");
  // };

  return (
    <NavbarWrapper>
      <ButtonWrapper>
        <Button
          width="119px"
          height="40px"
          Icon={PlusSvg}
          color="#fff"
          bg="#0094FF"
          text="Add new"
        />
        <Button
          width="114px"
          height="40px"
          color="#222222"
          bg="#F5F8FA"
          text="Kanban"
          isDropDown={"true"}
        />
      </ButtonWrapper>
      {/* <DatePicker Svg={DownSvg} open={open} setOpen={setOpen} /> */}
      <ContentsWrapper>
        <InputWrapper>
          <Input
            // action={handleFilter}
            // value={wordEntered}
            name="seach"
            placeholder={"Seach..."}
            color="#8C939F"
            width="180px"
            height="40px"
            bg="#F5F8FA"
            // type="search"
          />
          {/* {wordEntered.length === 0 ? (
            <SearchSvg />
          ) : (
            <XSvg onClick={clearInput} />
          )} */}
        </InputWrapper>
        <Notification>
          <MessageCount>
            <div>99+</div>
          </MessageCount>
          <BellSvg />
        </Notification>
        <UserAccount>
          <UserSvg />
        </UserAccount>
      </ContentsWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
