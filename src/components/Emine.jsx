import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';
import { Card, CardBody } from '@chakra-ui/card';
import { Image } from '@chakra-ui/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import React, { useState } from 'react';

const Emine = () => {
    
        const kisiler = [
            { name: "Ahmet Yılmaz", puan: 85, src: "https://randomuser.me/api/portraits/men/1.jpg" },
            { name: "Ayşe Kaya", puan: 90, src: "https://randomuser.me/api/portraits/women/2.jpg" },
            { name: "Mehmet Demir", puan: 75, src: "https://randomuser.me/api/portraits/men/3.jpg" },
            { name: "Fatma Öztürk", puan: 88, src: "https://randomuser.me/api/portraits/women/4.jpg" },
            { name: "Mustafa Arslan", puan: 92, src: "https://randomuser.me/api/portraits/men/5.jpg" },
            { name: "Zeynep Çelik", puan: 80, src: "https://randomuser.me/api/portraits/women/6.jpg" },
            { name: "Emir Şahin", puan: 87, src: "https://randomuser.me/api/portraits/men/7.jpg" },
            { name: "Elif Erdoğan", puan: 93, src: "https://randomuser.me/api/portraits/women/8.jpg" },
            { name: "Osman Yıldırım", puan: 78, src: "https://randomuser.me/api/portraits/men/9.jpg" },
            { name: "Ali Doğan", puan: 84, src: "https://randomuser.me/api/portraits/women/10.jpg" },
            { name: "Hatice Aydın", puan: 89, src: "https://randomuser.me/api/portraits/men/11.jpg" },
           
        ];
        
   

    const [genisletildi, setGenisletildi] = useState(false);

    const gosterilenKisiler = genisletildi ? kisiler : kisiler.slice(0, 5);
    const buttonText = genisletildi ? "Daralt" : "Genişlet";

    const toggleGenisletme = () => {
        setGenisletildi(!genisletildi);
    }

    return (
        <Flex flexDirection="column" alignItems="center">
            <Card height={genisletildi ? "auto" : "400px"} width="300px" mb="4">
                <CardBody>
                    <Flex mb="20px" alignItems="center">
                        <Image src="/crown-icon.svg" w="30" h="30" mr="2" />
                        <Text fontSize="18px" fontWeight="bold" textDecoration="underline">En İyiler</Text>
                    </Flex>
                    <Flex flexDirection="column" alignItems="flex-start">
                        {gosterilenKisiler.map((kisi, index) => (
                            <Box key={index} maxW="200px" margin="auto" mb="7" mr="1" ml="2" display="flex" alignItems="center">
                               <Avatar src={kisi.src} size="xs" />
                                <Text mt={2} ml={2} fontSize="13px" fontWeight="bold">{kisi.name}</Text>
                                <Text ml={8} fontSize="15px">{kisi.puan} p</Text>
                            </Box>
                        ))}
                    </Flex>
                </CardBody>
                <Button colorScheme="teal" size="sm" alignSelf="center" onClick={toggleGenisletme} mb="10px">
                    {buttonText}
                </Button>
            </Card>
        </Flex>
    );
}

export default Emine;
