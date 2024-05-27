import { Avatar, Box, Button, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaPencilAlt, FaGraduationCap, FaCalendarAlt, FaUserPlus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ProfileName = ({ name }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(0);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/profileedit")
  }
  const handleFollowClick = () => {
    if (isFollowing) {
      setFollowerCount(followerCount - 1);
    } else {
      setFollowerCount(followerCount + 1);
    }
    setIsFollowing(!isFollowing);
  };
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      pt="10px"
      p="5px"
      w="100%"
      pl={"30px"}

      maxW={"450px"}
    >
      <Flex direction="column" w="100%">
        <Flex direction="row" alignItems="center">
          <Avatar
            size="xl"
            bg="teal.500"
          />
          <Flex direction="column" ml="10px" alignItems="flex-start">
            <Flex>{name}</Flex>
            <Flex
              bg="gray"
              color="white"
              p="2px 5px"
              borderRadius="5px"
              mt="5px"
            >
              85 Puan
            </Flex>
          </Flex>
        </Flex>
        <Flex direction="row" align="center" justify="space-between" p="20px" bg="#EEEEEE">
          <Flex
            alignItems="center"
            justifyContent="flex-start"
            pl="30px"
            bg="#58A399"
            w="30%"
            fontWeight="bold"
            height="50px"
          >
            Çirak
          </Flex>
          {name !== "Alperen Akal" && (
            <Button
              size="lg"
              bg="#EEE"
              height="50px"
              width="300px"
              leftIcon={<FaUserPlus size="1.5em" />}
              onClick={handleFollowClick}
            >
              {isFollowing ? "Takipten Çık" : "Takip Et"}
            </Button>
          )}
        </Flex>

      </Flex>
      <Flex alignItems="flex-start" mt="30px">
        <Flex direction="row" alignItems="center" gap={8} mr={"auto"}>
          <Flex direction={"column"} alignItems={"center"}>
            <Flex>
              Cevaplar
            </Flex>
            <Flex fontWeight={"bold"}>
              0
            </Flex>
          </Flex>
          <Box height="30px" width="3px" bg="gray.200" />
          <Flex direction={"column"} alignItems={"center"}>
            <Flex>
              Takip Sayisi
            </Flex>
            <Flex fontWeight={"bold"}>
              {followerCount}
            </Flex>
          </Flex>
          <Box height="30px" width="3px" bg="gray.200" />
          <Flex direction={"column"} alignItems={"center"}>
            <Flex>
              Begeni sayisi
            </Flex>
            <Flex fontWeight={"bold"}>
              0
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {name == "Alperen Akal" && (
        <Flex alignItems="flex-start" mt="30px" >
        <Button width={"300px"} borderRadius={"30px"} fontWeight={"bold"} gap={2} onClick={handleClick}>
          <FaPencilAlt />
          Profili Düzenle
        </Button>
      </Flex>
      )}
      
      <Flex alignItems="flex-start" w="100%" mt="30px" direction={"column"}>
        <Flex>
          Hakkinda
        </Flex>
        <Box height="5px" width="100%" bg="gray.200" mt={"4px"} />
        <Flex mt={"20px"} gap={3}>
          <Flex fontWeight={"bold"} fontSize={"25px"} >
            <FaGraduationCap />
          </Flex>
          <Flex fontWeight={"light"}>
            Seviye:
          </Flex>
          <Flex fontWeight={"bold"}>
            Üniversite
          </Flex>

        </Flex>
        <Flex mt={"20px"} gap={3}>
          <Flex fontWeight={"bold"} fontSize={"25px"} >
            <FaCalendarAlt />


          </Flex>
          <Flex fontWeight={"light"}>
            Katılma Tarihi:
          </Flex>
          <Flex fontWeight={"bold"}>
            28.11.2000
          </Flex>

        </Flex>
      </Flex>

    </Flex>

  )
}

export default ProfileName;
