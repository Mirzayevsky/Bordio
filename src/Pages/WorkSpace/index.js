import React, { useContext, useState } from "react";
import { Context } from "../../Context/Context";

import CardColumn from "../../Components/CardColumn";
import AddStatus from "../../Components/AddStatus/index";
import {
  WorkSpaceWrapper,
  Title,
  TitleWrapper,
  TasksWrapper,
  TaskCount,
  Header,
  Wrapper,
  TaskContent,
} from "./styles";
import { tasks } from "../../data";

const WorkSpace = () => {
  const { state, dispatch } = useContext(Context);
  const [edit, setEdit] = useState(null);

  return (
    <WorkSpaceWrapper>
      <TaskContent>
        <Header>
          <TitleWrapper>
            <Wrapper>
              <Title>New tasks</Title>
              <TaskCount>{state.newTasks.length}</TaskCount>
            </Wrapper>
          </TitleWrapper>
          <TitleWrapper>
            <Wrapper>
              <Title>Scheduled</Title>
              <TaskCount>{state.scheduled.length}</TaskCount>
            </Wrapper>
          </TitleWrapper>
          <TitleWrapper>
            <Wrapper>
              <Title>In progress</Title>
              <TaskCount>{state.inprogress.length}</TaskCount>
            </Wrapper>
          </TitleWrapper>
          <TitleWrapper>
            <Wrapper>
              <Title>Completed</Title>
              <TaskCount>{state.completed.length}</TaskCount>
            </Wrapper>
          </TitleWrapper>
        </Header>
        <TasksWrapper>
          <CardColumn tasks={state.newTasks} />
          <CardColumn tasks={state.scheduled} />
          <CardColumn tasks={state.inprogress} />
          <CardColumn tasks={state.completed} />
        </TasksWrapper>
      </TaskContent>
      <AddStatus />
    </WorkSpaceWrapper>
  );
};

export default WorkSpace;
