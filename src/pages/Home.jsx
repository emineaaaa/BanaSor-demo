import { Box, Button, Container, Flex, Link } from '@chakra-ui/react'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Home2 from '../components/Home-2'
import Home3 from '../components/Home-3'

const Home = () => {

  const navigate=useNavigate()

  const handleClick=()=>{
    navigate(`/sorulistesi`)
  }

  return (
    <div>
       <Button onClick={handleClick}>Soru Listesi</Button>
       <Home2/>
       <Home3/>

    </div>
  )
}

export default Home