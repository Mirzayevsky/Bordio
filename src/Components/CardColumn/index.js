import React from "react";
import { CardWrapper, Cover, Date, TaskCard, Title } from "./style";
const CardColumn = ({ tasks }) => {
  console.log(tasks);

  return (
    <CardWrapper>
      {tasks.map((item) => (
        <TaskCard style={{ backgroundColor: `${item.bg}` }} key={item.id}>
          {item.bg === "#F0F0F0" ? <Cover /> : ""}
          <Title
            style={{
              textDecoration: `${item.bg === "#F0F0F0" ? "line-through" : ""}`,
            }}
          >
            {item.title}
          </Title>
          <Date>{item.date}</Date>
        </TaskCard>
      ))}
    </CardWrapper>
  );
};

export default CardColumn;
