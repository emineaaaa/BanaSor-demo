import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaQuestion ,FaCheck,FaPeopleArrows} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ProfilePast = () => {
  // Soruları, cevapları ve takip ettikleri temsil eden state'ler
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [activeTab, setActiveTab] = useState('questions'); // Hangi sekmenin aktif olduğunu belirleyen state
  const navigate = useNavigate();
  const handleClick = () => {
   navigate(`/sorulistesi`);
    // Burada istediğiniz işlemi gerçekleştirebilirsiniz.
};
  return (
    <Flex direction={"column"}>
      <Flex>
        <Flex gap={6} width={"700px"}>
          <Button 
            bg={activeTab === 'questions' ? "#4A5568" : "#36454F"} 
            color={"white"} 
            onClick={() => setActiveTab('questions')}
          >
            Sorular
          </Button>
          <Box height="40px" width="3px" bg="gray.200" />
          <Button 
            bg={activeTab === 'answers' ? "#4A5568" : "#36454F"} 
            color={"white"}
            onClick={() => setActiveTab('answers')}
          >
            Cevaplar
          </Button>
          <Box height="40px" width="3px" bg="gray.200" />
          <Button 
            bg={activeTab === 'followers' ? "#4A5568" : "#36454F"} 
            color={"white"} 
            onClick={() => setActiveTab('followers')}
          >
            Takip Ettiklerin
          </Button>
        </Flex>
      </Flex>

      <Flex borderRadius={"30px"} bg={"gray.200"} mt={"30px"} height={"400px"} alignItems={"center"} justifyContent={"center"}>
        {activeTab === 'questions' && (questions.length > 0 ? (
          questions.map((question, index) => <Text key={index} color={"white"}>{question}</Text>)
        ) : (
          <Flex direction={"column"} alignItems={"center"} fontWeight={"bold"} gap={3}>
            <FaQuestion fontSize={"25px"} />
            <Text color={"dark"}>Henüz hiç soru sormadın.</Text>
            <Button width={"200px"} borderRadius={"30px"} fontWeight={"bold"} gap={2} bg={"#36454F"} color={"white"}>
              Sorunu Sor
            </Button>
          </Flex>
        ))}
        {activeTab === 'answers' && (answers.length > 0 ? (
          answers.map((answer, index) => <Text key={index} color={"white"}>{answer}</Text>)
        ) : (
            <Flex direction={"column"} alignItems={"center"} fontWeight={"bold"} gap={3}>
            <FaCheck  fontSize={"25px"} />
            <Text color={"dark"}>Henüz hiç cevap vermedin.</Text>
            <Button 
            width={"200px"} 
            borderRadius={"30px"} 
            fontWeight={"bold"} 
            gap={2} 
            bg={"#36454F"} 
            color={"white"}
            onClick={() =>handleClick()}
            >
              Soruları gör
            </Button>
          </Flex>
        ))}
        {activeTab === 'followers' && (followers.length > 0 ? (
          followers.map((follower, index) => <Text key={index} color={"white"}>{follower}</Text>)
        ) : (
            <Flex direction={"column"} alignItems={"center"} fontWeight={"bold"} gap={3}>
            <FaPeopleArrows  fontSize={"25px"} />
            <Text color={"dark"}>  Henüz kimseyi takip etmedin</Text>
            
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default ProfilePast;
