import React from 'react'
import { Card, CardWrapper, TaskWrapper, Title, TitleWrapper } from './style'

const Tasks = () => {
  return (
    <TaskWrapper>
      <TitleWrapper>
        <Title>New Task</Title>
        <Title>Scheduled</Title>
        <Title>In progress</Title>
        <Title>Completed</Title>
      </TitleWrapper>
     <CardWrapper>
      <Card/>
        <Card/>
        <Card/>
        <Card/>
     </CardWrapper>
     <CardWrapper>
      <Card/>
        <Card/>
        <Card/>
        <Card/>
     </CardWrapper>
    </TaskWrapper>
  )
}

export default Tasks