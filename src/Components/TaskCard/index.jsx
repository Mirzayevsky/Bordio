import React, { memo} from "react";
import { Wrapper, Cover, Title, Date } from "./styles";


const TaskCard = memo((props) => {
  const { data, draggable = false, onDrop, onDragOver, onDragStart } = props;
  const { date, status, title,bg } = data;

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

  const isCompleted = status === "completed";

  return (
    <Wrapper
      draggable={draggable}
      // isCompleted={isCompleted}
      onDrop={handleDrop}
      onDragOver={onDragOver}
      onDragStart={handleDragStart}
      style={{ backgroundColor: `${bg}` }}
    >
      {bg === "#F0F0F0" ? <Cover /> : ""}
      <Title
        style={{
          textDecoration: `${status === "completed" ? "line-through" : ""}`,
        }}
      >
        {title}
      </Title>
      <Date>{date}</Date>
    </Wrapper>
  );
});

export default TaskCard;
