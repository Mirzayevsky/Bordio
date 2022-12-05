import React from 'react'
import Tasks from '../../Components/Tasks'
import { WorkSpaceWrapper,Title, TitleWrapper, TasksWrapper } from './styles'

const WorkSpace = () => {
  return (
    <WorkSpaceWrapper>
      <TitleWrapper>
        <Title>New tasks</Title>
        <Title>Scheduled</Title>
        <Title>In progress</Title>
        <Title>Completed</Title>
      </TitleWrapper>
        <TasksWrapper>
          <Tasks/>
          <Tasks/>
          <Tasks/>
          <Tasks/>
        </TasksWrapper>
    </WorkSpaceWrapper>
  )
}

export default WorkSpace