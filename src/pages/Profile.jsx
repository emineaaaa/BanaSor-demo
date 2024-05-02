import { Avatar, Flex } from '@chakra-ui/react'
import React from 'react'
import ProfileName from '../components/ProfileName'
import ProfilePast from '../components/ProfilePast'

const Profile = () => {
  return (
    <Flex p={"30px"} gap={50} >
          <ProfileName/>
          <ProfilePast/>

    </Flex>
  
  
  )
}

export default Profile