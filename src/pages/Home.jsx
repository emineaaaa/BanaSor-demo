import { Box, Container, Flex, Link } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Flex flexDirection={"column"}  bg={"tomato"} >
        <Link  href={"alperen"}  color={"white"} cursor={"pointer"} > ALperen</Link>
        <Link href={"emine"}  color={"white"} cursor={"pointer"}> EMine</Link>
        <Link href={"huseyin"}  color={"white"} cursor={"pointer"}> Huseyin</Link>
        <Link href={"beyza"}  color={"white"} cursor={"pointer"}> Beyza</Link>
        </Flex>

    </div>
  )
}

export default Home