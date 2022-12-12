import React from "react";
import Card from "../Card";
import { CardWrapper} from "./style";

const TaskColumn = ({ tasks,type,ondropTask,add,status}) => {
  return (
    <CardWrapper ref={add}>
      {tasks.filter(i => i.status === status).map((item,index)=>(
        <Card key={item.id} ondropTask={ondropTask} type={type} item={item} index={index}/>
      ))}
    </CardWrapper>
  );
};

export default TaskColumn;
