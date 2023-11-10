import { useCallback } from "react";
import { Column } from "./styles";
import TaskCard from "../TaskCard";
const TaskColumn = (props) => {
  const { data, onDrop, onDragStart, onDragOver, type } = props;

  const handleDrop = useCallback(
    (event, card) => onDrop(event, data, card),
    [data, onDrop]
  );

  const handleDragStart = useCallback(
    (event, card) => onDragStart(event, data, card),
    [data, onDragStart]
  );

  const handleColumnDrop = (event) => onDrop(event, data);

  const handleColumnDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <Column onDrop={handleColumnDrop} onDragOver={handleColumnDragOver}>
      {
        //data // .filter((item) => item.status === type)
        data.items.map((item) => (
            <TaskCard
              key={item.id}
              data={item}
              draggable
              onDrop={handleDrop}
              onDragStart={handleDragStart}
              onDragOver={onDragOver}
            />
        ))
      }
    </Column>
  );
};

export default TaskColumn;
