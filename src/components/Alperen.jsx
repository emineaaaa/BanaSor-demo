import { Avatar, Badge, Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, HStack, Heading, IconButton, Image, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from "typewriter-effect";
import TextComp from './TextComp';
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiLike, BiChat, BiShare, BiSolidLike, BiSolidShare } from "react-icons/bi";




const Alperen = () => {
    const [liked, setLiked] = useState(false);
    const [share, setShare] = useState(false)

    const shareInfo =() =>{
        setShare(!share)
        navigator.share({
            url: window.location.href
        })
    }
    useEffect(() => {
        AOS.init();
    }, []);
    const alperen = "alperen"
    return (
        <Flex flexDirection="column" gap={2} mb={2} py={5}>
            <Flex align="center" flexDirection={"column"}>
                <Box>
                    <div data-aos="flip-left">
                        <Image
                            src={"/verified.svg"}
                            w={"100px"}
                            h={"100px"}

                        />
                    </div>
                </Box>
                <Box>
                    <Text
                        whiteSpace="pre-line"
                        fontFamily="Source Code Pro, monospace" // Projenize uygun bir font ile değiştirebilirsiniz.
                        fontSize={{ base: "lg", md: "xl", lg: "2xl" }} // Responsive font boyutu ayarı
                        textAlign="center"
                        lineHeight="taller"
                        mt={5} // Üstten boşluk ekleyerek metni daha rahat okunabilir yapar
                        fontWeight={"bold"}
                    > <Typewriter
                            options={{
                                strings: [
                                    "Bir soru sormak, bilginin kapılarını aralar.",
                                    "Her cevap, yeni ufuklar açar.",
                                    "Birlikte öğrenelim, birlikte büyüyelim."
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 100
                            }}
                        />
                    </Text>
                </Box>


            </Flex>
            <Divider m={1} borderColor={"#58A399"} borderWidth={"2px"} />
            <Flex flexDir={"row"} w={"100%"} gap={4}>
                <Box flex={1} >
                    <TextComp text={"Sorunu Sor"}></TextComp>
                </Box>
                <Flex flex={1}>


                    <Card maxW='md'>
                        <CardHeader>
                            <Flex spacing='4'>
                                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                    <Avatar name='Alperen Akal' />

                                    <Box>
                                        <Heading size='sm'>Alperen Akal</Heading>
                                        <Flex align="center" justify="center" gap="2">
                                            <Text>Matematik</Text>
                                            <Box flexShrink={0} w={1.5} h={1.5} bg="gray.800" borderRadius="full" />
                                            <Text>Lise</Text>
                                        </Flex>
                                    </Box>
                                </Flex>
                              
                            </Flex>
                        </CardHeader>
                        <CardBody>
                            <Text>
                                With Chakra UI, I wanted to sync the speed of development with the speed
                                of design. I wanted the developer to be just as excited as the designer to
                                create a screen.
                            </Text>
                        </CardBody>


                        <CardFooter
                            justify='space-between'
                            flexWrap='wrap'
                            sx={{
                                '& > button': {
                                    minW: '136px',
                                },
                            }}
                        >
                            <Button flex='1' variant='ghost' leftIcon={liked ? <BiSolidLike /> : <BiLike />} onClick={() => setLiked(!liked)}>
                                Like
                            </Button>
                            <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
                                Comment
                            </Button>
                            <Button onClick={shareInfo} flex='1' variant='ghost' leftIcon={share ? <BiSolidShare/>:<BiShare/>}>
                                Share
                            </Button>
                        </CardFooter>
                    </Card>





                </Flex>



            </Flex>
        </Flex >
    );
}

export default Alperen;
