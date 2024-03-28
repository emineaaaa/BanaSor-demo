import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Container, Flex } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SoruListesi from './components/SoruListesi'

import Huseyin from './components/Huseyin'
import Beyza from './components/Beyza'
import Emine from './components/RancedList'
import KonuList from './components/KonuList'
import SoruDetay from './components/SoruDetay'



function App() {
 

  return (
    
   <Container maxW={"90%"} flexDirection={"column"}  >
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sorulistesi' element={<SoruListesi/>}/>
      <Route path='/emine' element={<Emine/>}/>
      <Route path='/huseyin' element={<Huseyin/>}/>
      <Route path='/beyza' element={<Beyza/>}/>
      <Route path='/konu/:konu' element={<KonuList/>} />
      <Route path='/sorudetay' element={<SoruDetay/>}/>




    </Routes>

    <Footer/>

      
   </Container>
  )
}

export default App
