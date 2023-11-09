import { Column } from "./styles";
import TaskCard from "../TaskCard";
const TaskColumn = ({
  data,
  column,
  moveDataToColumn,
  removeDataFromColumn,
  addToColumnRef,
  removeFromColumnRef,
  type,
  destinationColumns
}) => {
  return (
    
    <Column ref={removeFromColumnRef}>
      {data.filter((item) => item.status === type).map((item) => (
          <TaskCard
            item={item}
            key={item.id}
            playerType={type}
            onDropPlayer={moveDataToColumn}
            index={item.id}
          />
        ))}
    </Column>
  );
};

export default TaskColumn;
