import React from "react";
import CardColumn from "../../Components/CardColumn";
import AddStatus from "../../Components/AddStatus/index"
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
import {tasks} from "../../data"

const WorkSpace = () => {
  return (
    <WorkSpaceWrapper>
    <TaskContent>
    <Header>
        <TitleWrapper>
          <Wrapper>
            <Title>New tasks</Title>
            <TaskCount>3</TaskCount>
          </Wrapper>
        </TitleWrapper>
        <TitleWrapper>
          <Wrapper>
            <Title>Scheduled</Title>
            <TaskCount>12</TaskCount>
          </Wrapper>
        </TitleWrapper>
        <TitleWrapper>
          <Wrapper>
            <Title>In progress</Title>
            <TaskCount>22</TaskCount>
          </Wrapper>
        </TitleWrapper>
        <TitleWrapper>
          <Wrapper>
            <Title>Completed</Title>
            <TaskCount>31</TaskCount>
          </Wrapper>
        </TitleWrapper>
      </Header>
      <TasksWrapper>
       <CardColumn tasks={tasks.newTasks}/>
       <CardColumn tasks={tasks.scheduled}/>
       <CardColumn tasks={tasks.inprogress}/>
       <CardColumn tasks={tasks.completed}/>

      </TasksWrapper>
    </TaskContent>
    <AddStatus/>
    </WorkSpaceWrapper>
  );
};

export default WorkSpace;
