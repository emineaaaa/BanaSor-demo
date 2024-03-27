import { Box, Button, Divider, Flex, Icon, Image } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useSpring, animated, useSpringRef } from 'react-spring';
const AnimatedDivider = animated(Divider);



const Alperen = () => {
    const [dersler, setDersler] = useState([]);
    const [tumDersleriGoster, setTumDersleriGoster] = useState(false);

    useEffect(() => {
        fetch('/dersler.json')
            .then(response => response.json())
            .then(data => setDersler(data.dersler));
    }, []);

    const dersleriGoster = tumDersleriGoster ? dersler : dersler.slice(0, 11);
const AnimatedFlex = animated(Flex);
    const dahaFazlaAnimasyon = useSpring({
        to: { 
            opacity: 1, 
            height: tumDersleriGoster ? 'auto' : '0px',
            transform: tumDersleriGoster ? 'translateY(0%)' : 'translateY(-10%)',
        },
        from: { 
            opacity: 1, 
            height: 'auto', 
            transform: 'translateY(-150%)',
        },
        config:{
            duration: 200,
        }
    });
    return (
        <Flex direction="column" alignItems="center" justifyContent="center" p={"5px"}>
            <h2>Ders Listesi</h2>
            <AnimatedFlex style={dahaFazlaAnimasyon}   wrap="wrap" justify="center" gap={10} width={"1100px"} mt={"3"}>
                {dersleriGoster.map(ders => (
                    <Button 
                        key={ders.id} 
                        mt={"10px"} 
                        bg={"transparent"} 
                        _hover={{ bg: "transparent" }} // Hover efektini kaldırır
                        variant="unstyled" // Butonun tüm stilini kaldırır
                        alignItems="center" // Buton içeriğini merkezler
                        onClick={()=>console.log(ders.name)}
                        
                    >
                        {/* Buton içeriğini Flex bileşeni ile düzenle */}
                        <Flex direction="column" alignItems="center" gap={2}>
                            <Image src={`/derslerimg/${ders.icon}`} boxSize="50px" />
                            <Box
                                fontSize={"12px"}
                                fontFamily={"ProximaNova, Helvetica, Arial, sans-serif"}
                                textAlign="center"
                                mt={2}>
                                {ders.name}
                            </Box>
                        </Flex>
                    </Button>
                ))}
            </AnimatedFlex>
            <Flex mt="50px" alignItems="center" justifyContent="center" width="87%">
                <AnimatedDivider style={dahaFazlaAnimasyon} borderColor="#58A399" borderWidth="2px" flex={1} />
                <Button 
                    mx="2" 
                    size="sm" 
                    onClick={() => setTumDersleriGoster(!tumDersleriGoster)}
                    bg={"transparent"}
                >
                    {tumDersleriGoster ? "Daha Az" : "Daha Fazlası"} 
                </Button>
                <AnimatedDivider style={dahaFazlaAnimasyon} borderColor="#58A399" borderWidth="2px" flex={1} />
            </Flex>
        </Flex>
    )
}

export default Alperen

