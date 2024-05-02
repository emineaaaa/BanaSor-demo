import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Container, Flex } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'


import Huseyin from './components/Huseyin'
import Beyza from './components/Beyza'
import Emine from './components/RancedList'
import KonuList from './components/KonuList'

import AllSoruListesi from './pages/AllSoruListesi'

import SoruDetay from './components/SoruDetay'
<<<<<<< HEAD
import SoruSorSayfasi from './components/SoruSorSayfasi'
import SoruArama from './components/SoruArama'
=======
import Profile from './pages/Profile'
import ProfileEdit from './pages/ProfileEdit'
>>>>>>> refs/remotes/origin/main




function App() {
 

  return (
    
   <Container maxW={"90%"} flexDirection={"column"}  >
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sorulistesi' element={<AllSoruListesi/>}/>
      <Route path='/emine' element={<Emine/>}/>
      <Route path='/huseyin' element={<Huseyin/>}/>
      <Route path='/beyza' element={<Beyza/>}/>
      <Route path='/konu/:konu' element={<KonuList/>} />
      <Route path='/sorudetay/:soruid' element={<SoruDetay/>}/>
<<<<<<< HEAD
      <Route path='/sorusorsayfasi' element={<SoruSorSayfasi/>}/>

=======
      <Route path='/profile'  element={<Profile/>}/>
      <Route path='/profileedit' element={<ProfileEdit/>} />
>>>>>>> refs/remotes/origin/main




    </Routes>

    <Footer/>

      
   </Container>
  )
}

export default App
