import React from 'react'
import Rating from './Rating'
import { Box, Flex, Text } from '@chakra-ui/react'
const kisiler =
[
  {
    isim:"Alperen",
    rating:3.5,
  },
  {
    isim:"emine",
    rating:4,
  }
]
const Emine = () => {
  return (
    <Flex alignItems="center" justifyContent="center" flexDirection={"column"}  gap={2}>
     {kisiler.map((kisi, index) => (
        <Box key={index}  backgroundColor={"teal.500"} w={"300px"} p={5} borderRadius="lg" boxShadow="md" textAlign={"center"}>
          <Text>{kisi.rating}</Text>
          <Text fontSize="xl" color="white" mb={3}>{kisi.isim}</Text>
          <Rating count={kisi.rating} />
        </Box>
      ))}
  </Flex>
  )
}

export default Emine