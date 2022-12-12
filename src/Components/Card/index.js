import React from 'react'
import { useDrag } from 'react-dnd';
import { Cover, Date, TaskCard, Title } from './styles'

const  Card = ({item,type,ondropTask,index }) => {

    const [{ isDraggble }, dragRef] = useDrag({
          type:type,
          item:() => ({ ...item, index }),
          end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (dropResult && item) {
              ondropTask(item);
            }
          },
          collect: (monitor) => (
            {
              isDragging:monitor.isDragging() ? 0.5 : 1,
            }
          )
        });

  return (
      <TaskCard style={{ backgroundColor: `${item.bg}`, isDraggble }} ref={dragRef} >
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
  )
}

export default  Card