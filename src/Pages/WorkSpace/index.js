import React, { useContext, useState } from "react";
import TaskColumn from "../../Components/CardColumn";
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
import { useDrop } from "react-dnd";

const WorkSpace = () => {

  const [newTask, setNewTask] = useState(initialState.newTasks);
  const [scheduled, setScheduled] = useState(initialState.scheduled);

  const [{ isOver }, addToScheduledRef] = useDrop({
    accept: "newTask",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  const [{ isOver: isNewTaskOver }, removeFromScheduledRef] = useDrop({
    accept: "scheduled",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  const moveNewTaskToScheduled = (item) => {
    console.log(item);
    setNewTask((prev)=> prev.filter((_,i) => i !== item.index))
    setScheduled((prev) => [...prev,item])
  };

  const removeNewTaskFromScheduled = (item) => {
    console.log(item);
    setScheduled((prev)=> prev.filter((_,i) => i !== item.index))
    setNewTask((prev) => [...prev,item])
  };

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
          <TaskColumn tasks={newTask}  type="task"  ondropTask={moveNewTaskToScheduled} add={removeFromScheduledRef} />
          <TaskColumn tasks={scheduled}  type="scheduled"  ondropTask={removeNewTaskFromScheduled} add={addToScheduledRef} />
          {/* <CardColumn tasks={initialState.inprogress} />
          <CardColumn tasks={initialState.completed} /> */}
        </TasksWrapper>
      </TaskContent>
      <AddStatus />
    </WorkSpaceWrapper>
  );
};

export default WorkSpace;
