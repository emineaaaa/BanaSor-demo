import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Container, Flex } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Alperen from './components/Alperen'

import Huseyin from './components/Huseyin'
import Beyza from './components/Beyza'
import Emine from './components/Emine'



function App() {
 

  return (
    
   <Container maxW={"90%"} flexDirection={"column"}  >
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/alperen' element={<Alperen/>}/>
      <Route path='/emine' element={<Emine/>}/>
      <Route path='/huseyin' element={<Huseyin/>}/>
      <Route path='/beyza' element={<Beyza/>}/>




    </Routes>

    <Footer/>

      
   </Container>
  )
}

export default App
