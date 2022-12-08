import React, { useContext, useState } from "react";
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
import { initialState } from "../../data";

const WorkSpace = () => {

  return (
    <WorkSpaceWrapper>
      <TaskContent>
        <Header>
          <TitleWrapper>
            <Wrapper>
              <Title>New tasks</Title>
              <TaskCount>{initialState.newTasks.length}</TaskCount>
            </Wrapper>
          </TitleWrapper>
          <TitleWrapper>
            <Wrapper>
              <Title>Scheduled</Title>
              <TaskCount>{initialState.scheduled.length}</TaskCount>
            </Wrapper>
          </TitleWrapper>
          <TitleWrapper>
            <Wrapper>
              <Title>In progress</Title>
              <TaskCount>{initialState.inprogress.length}</TaskCount>
            </Wrapper>
          </TitleWrapper>
          <TitleWrapper>
            <Wrapper>
              <Title>Completed</Title>
              <TaskCount>{initialState.completed.length}</TaskCount>
            </Wrapper>
          </TitleWrapper>
        </Header>
        <TasksWrapper>
          <CardColumn tasks={initialState.newTasks} />
          <CardColumn tasks={initialState.scheduled} />
          <CardColumn tasks={initialState.inprogress} />
          <CardColumn tasks={initialState.completed} />
        </TasksWrapper>
      </TaskContent>
      <AddStatus />
    </WorkSpaceWrapper>
  );
};

export default WorkSpace;
