import React from 'react'
import Navbar from '../../Layouts/Navbar'
import Sidebar from '../../Layouts/Sidebar'
import Tools from '../../Layouts/Tools'
import WorkSpace from '../WorkSpace'
import { MainPageWrapper } from './styles'

const MainPage = () => {
  return (
    <MainPageWrapper>
        <Sidebar/>
        <Tools/>
        <Navbar/>
        <WorkSpace/>
    </MainPageWrapper>
  )
}

export default MainPage