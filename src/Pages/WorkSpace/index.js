import React from "react";
import AddStatus from "../../Components/AddStatus/index";
import { WorkSpaceWrapper } from "./styles";
import Board from "../../Components/board";

const WorkSpace = () => {
  return (
    <WorkSpaceWrapper>
      <Board/>
      <AddStatus />
    </WorkSpaceWrapper>
  );
};

export default WorkSpace;
