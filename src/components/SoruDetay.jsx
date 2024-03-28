import React from 'react'
import { Card, Text, CardHeader, CardBody, CardFooter, Flex } from '@chakra-ui/react'

const SoruDetay = () => {
    const [sorular, setSorular] = useState([]);
    useEffect(() => {
        fetch('/sorular.json')
            .then(response => response.json())
            .then(data => setSorular(data.sorular)); // Burada setSorular kullanılmalı
    }, []);
    
    return (
        <Flex>
            <Card maxW={"700px"}>
                <CardBody>
                <Flex flexDirection="column" alignItems="flex-start">
                        {gosterilenKisiler.map((kisi, index) => (
                            <Box key={index} maxW="200px" margin="auto" mb="7" mr="1" ml="2" display="flex" alignItems="center">
                               <Avatar src={kisi.src} size="xs" />
                                <Text mt={2} ml={2} fontSize="13px" fontWeight="bold">{kisi.name}</Text>
                                <Text ml={8} fontSize="15px">{kisi.puan} p</Text>
                            </Box>
                        ))}
                    </Flex>
                    <Text>View a summary ofaaaaaaaaaaakkkkkksadjlaekfdhjlakhdfklsdhfkdsjhflakdhfalkdhf all your customers over the last month.</Text>
                </CardBody>
            </Card>


        </Flex>
    )
}

export default SoruDetay