import React from 'react'
import { Container, LinkIconWrapper, LinkName, LinkWrapper, Title, ToolsWrapper } from './styles'
import { ReactComponent as RoadmapSvg } from '../../assets/Union.svg'
import { ReactComponent as ScheduleSvg } from '../../assets/calendar.svg'
import { ReactComponent as TasksSvg } from '../../assets/tasks.svg'
import { ReactComponent as NotesSvg } from '../../assets/Notes.svg'
import { ReactComponent as FilesSvg } from '../../assets/files.svg'




const Tools = () => {
  return (
    <ToolsWrapper>
        <Title>Tools</Title>
        <Container>
           <LinkWrapper>
           <LinkIconWrapper>
            <RoadmapSvg/>
            </LinkIconWrapper>
            <LinkName>Roadmap</LinkName>
           </LinkWrapper>

           <LinkWrapper>
           <LinkIconWrapper>
              <ScheduleSvg/>
            </LinkIconWrapper>
            <LinkName>Schedule</LinkName>
           </LinkWrapper>

           <LinkWrapper>
           <LinkIconWrapper>
              <TasksSvg/>
            </LinkIconWrapper>
            <LinkName>Tasks</LinkName>
           </LinkWrapper>
           
           <LinkWrapper>
           <LinkIconWrapper>
              <NotesSvg/>
            </LinkIconWrapper>
            <LinkName>Notes</LinkName>
           </LinkWrapper>
           
           <LinkWrapper>
           <LinkIconWrapper>
              <FilesSvg/>
            </LinkIconWrapper>
            <LinkName>Notes</LinkName>
           </LinkWrapper>
        </Container>
    </ToolsWrapper>
  )
}

export default Tools