import React, {useState} from "react";
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
import { initialState, statuses } from "../../data";
import { useDrop } from "react-dnd";
import { TASK_TYPE } from "../../Constants/type";

const WorkSpace = () => {
  const [tasks, setTasks] = useState(initialState);

  // for droping task to  task array
  const onDrop = (task, monitor, status) => {
    const mapping = status.find((si) => si.status === status);
    setTasks((prevState) => {
      const newItems = prevState
        .filter((i) => i.id !== task.id)
        .concat({ ...task, status });
      return [...newItems];
    });
  };

  // const [{ isOver }, drop] = useDrop({
  //   accept: TASK_TYPE,
  //   canDrop: (task, monitor) => {
  //       const taskIndex = statuses.findIndex(si => si.status === task.status);
  //       const statusIndex = statuses.findIndex(si => si.status === status);
  //       return [taskIndex + 1, taskIndex - 1, taskIndex].includes(statusIndex);
  //   },

  //   drop: (task, monitor) => {
  //       onDrop(task, monitor, status);
  //   },

  //   collect: monitor => ({
  //       isOver: monitor.isOver()
  //   })
  // });

  const [{ isOver }, scheduledRef] = useDrop({
    accept: TASK_TYPE,
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  const movetasks = (dragIndex, hoverIndex) => {
    const task = tasks[dragIndex];
    setTasks((prevState) => {
      const newTasks = prevState.filter((i, idx) => idx !== dragIndex);
      newTasks.splice(hoverIndex, 0, task);
      return [...newTasks];
    });
  };

  const taskMove = (item) => {
    console.log(item);
    if (item) {
      setTasks((prev) => prev.filter((_, i) => i !== item.index));
    }else{
      setTasks((prev) => [...prev, item]);
    }
  };

  return (
    <WorkSpaceWrapper>
      <TaskContent>
        <Header>
          <TitleWrapper>
            <Wrapper>
              <Title>New tasks</Title>
              <TaskCount>{initialState.tasks.length}</TaskCount>
            </Wrapper>
          </TitleWrapper>
          <TitleWrapper>
            <Wrapper>
              <Title>Scheduled</Title>
              <TaskCount></TaskCount>
            </Wrapper>
          </TitleWrapper>
          <TitleWrapper>
            <Wrapper>
              <Title>In progress</Title>
              <TaskCount></TaskCount>
            </Wrapper>
          </TitleWrapper>
          <TitleWrapper>
            <Wrapper>
              <Title>Completed</Title>
              <TaskCount></TaskCount>
            </Wrapper>
          </TitleWrapper>
        </Header>
        <TasksWrapper>
          {statuses.status.map((item) => (
            <TaskColumn
              key={item.id}
              status={item.name}
              tasks={tasks.tasks}
              type={item.name}
              ondropTask={taskMove}
              add={scheduledRef}
            />
          ))}
        </TasksWrapper>
      </TaskContent>
      <AddStatus />
    </WorkSpaceWrapper>
  );
};

export default WorkSpace;
