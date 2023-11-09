import React, { useState } from "react";
import TaskColumn from "../../Components/TaskColumn/index";
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
import { initialState, dataStatus } from "../../data";
// import { useDrop } from "react-dnd";
// import { TASK_TYPE } from "../../Constants/type";
import { useDrop } from "react-dnd";

const WorkSpace = () => {
  const [data, setData] = useState(initialState.tasks);

  const [column, setColumn] = useState([]);

  const [{ isOver }, addToColumnRef] = useDrop({
    accept: "player",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  const [{ isOver: isDataOver }, removeFromColumnRef] = useDrop({
    accept: "team",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  const moveDataToColumn = (item) => {
    console.log(item);
    setData((prev) => prev.filter((_, i) => item.index !== i));
    setColumn((prev) => [...prev, item]);
  };

  const removeDataFromColumn = (item) => {
    setColumn((prev) => prev.filter((_, i) => item.index !== i));
    setData((prev) => [...prev, item]);
  };

  return (
    <WorkSpaceWrapper>
      <TaskContent>
        
        <Header>
          {dataStatus.status.map((i) => {
            const sortdata = data.filter((item) => item.status === i.name);
            return (
              <TitleWrapper key={i.id}>
                <Wrapper>
                  <Title>{i.name}</Title>
                  <TaskCount>{sortdata.length}</TaskCount>
                </Wrapper>
              </TitleWrapper>
            );
          })}
        </Header>

        <TasksWrapper>
          {dataStatus.status.map((item) => {
            return (
              <TaskColumn
                key={item.id}
                data={data}
                column={column}
                type={item.name}
                moveDataToColumn={moveDataToColumn}
                removeFromColumnRef={removeFromColumnRef}
                removeDataFromColumn={removeDataFromColumn}
                addToColumnRef={addToColumnRef}
                destinationColumns={[
                  "newtask",
                  "completed",
                  "inProgress",
                  "scheduled",
                ]}
              />
            );
          })}
        </TasksWrapper>
      </TaskContent>
      <AddStatus />
    </WorkSpaceWrapper>
  );
};

export default WorkSpace;
