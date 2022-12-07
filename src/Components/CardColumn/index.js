import React from 'react'
import { CardWrapper, TaskCard} from './style'
const CardColumn= ({tasks}) => {
  console.log(tasks);
  return (
    <CardWrapper>
       {tasks.map((item)=> (
         <TaskCard style={{backgroundColor:`${item.bg}`}} key={item.id}>{item.title} {item.date}</TaskCard>
       ))}
    </CardWrapper>
  )
}

export default CardColumn