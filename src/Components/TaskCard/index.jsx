import React, { memo, DragEventHandler } from "react";
import { Wrapper, Cover, Title, Date } from "./styles";
import { dataStatus } from "../../data";

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
      isCompleted={isCompleted}
      onDrop={handleDrop}
      onDragOver={onDragOver}
      onDragStart={handleDragStart}
      style={{ backgroundColor: `${bg}` }}
    >
      {bg === "#F0F0F0" ? <Cover /> : ""}
      <Title
        style={{
          textDecoration: `${bg === "#F0F0F0" ? "line-through" : ""}`,
        }}
      >
        {title}
      </Title>
      <Date>{status}</Date>
    </Wrapper>
  );
});

export default TaskCard;
