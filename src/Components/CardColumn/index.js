import React from "react";
import Card from "../Card";
import { CardWrapper} from "./style";

const TaskColumn = ({ tasks,type,ondropTask,add}) => {


  
  return (
    <CardWrapper ref={add}>
      {tasks.map((item,index)=>(
        <Card key={item.title} ondropTask={ondropTask} type={type} item={item} index={index}/>
      ))}
    </CardWrapper>
  );
};

export default TaskColumn;
