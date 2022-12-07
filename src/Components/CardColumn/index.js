import React from 'react'
import { CardWrapper, TaskCard} from './style'

const CardColumn= () => {
  return (
    <CardWrapper>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
    </CardWrapper>
  )
}

export default CardColumn