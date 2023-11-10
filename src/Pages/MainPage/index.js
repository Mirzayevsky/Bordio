import React from "react";
import { ThemeProvider } from "styled-components";
import Navbar from "../../Layouts/Navbar";
import Sidebar from "../../Layouts/Sidebar";
import Tools from "../../Layouts/Tools";
import WorkSpace from "../WorkSpace";
import { MainPageWrapper } from "./styles";

const MainPage = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <Tools />
      <Navbar />
      <WorkSpace />
      <MainPageWrapper />
    </React.Fragment>
  );
};

export default MainPage;
