import React, { memo, useState} from "react";
import { Wrapper, Cover, Title, Date } from "./styles";
import {COLUMN_STATUS} from "../../Constants/type"
const TaskCard = memo((props) => {
  // const [state,setState] = useState(props)
  const { data, draggable = false, onDrop, onDragOver, onDragStart,} = props;
  const { date, status, title,style } = data;
  const {completed} = COLUMN_STATUS

  // setState(state)

  // const isCompleted = status === completed

  console.log("status:",status)
  // console.log("cards:",data)


  const handleDrop = (event) => {
    if (onDrop) {
      onDrop(event, data);
    }
  };

  const handleDragStart = (event) => {
    if (onDragStart) {
      onDragStart(event, data);
    }
  };

 
  return (
    <Wrapper
      draggable={draggable}
      onDrop={handleDrop}
      onDragOver={onDragOver}
      onDragStart={handleDragStart}
      style={{
        backgroundColor: `${status === completed ? "lightblue" : style}`
      }}
    >
      {style === "#F0F0F0" ? <Cover /> : ""}
      <Title
        style={{
          textDecoration: `${status === completed ? "line-through" : ""}`,
        }}
      >
        {title}
      </Title>
      <Date>{date}</Date>
    </Wrapper>
  );
});

export default TaskCard;
