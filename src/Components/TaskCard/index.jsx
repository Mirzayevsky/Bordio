import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { Wrapper, Cover, Title, Date } from "./styles";

const TaskCard = ({ item, playerType, onDropPlayer, index }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: playerType,
    item: () => ({ ...item, index }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (item && dropResult) {
        onDropPlayer(item);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Wrapper ref={dragRef} style={{ backgroundColor: `${item.bg}` }}>
      {item.bg === "#F0F0F0" ? <Cover /> : ""}
      <Title
        style={{
          textDecoration: `${item.bg === "#F0F0F0" ? "line-through" : ""}`,
        }}
      >
        {item.title}
      </Title>
      <Date>{item.date}</Date>
    </Wrapper>
  );
};

export default TaskCard;
