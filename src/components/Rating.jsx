import { Flex } from '@chakra-ui/react';
import React from 'react'

import { BsStarFill , BsStar ,BsStarHalf   } from "react-icons/bs";


const Rating = ({ count }) => {
    const totalStars = 5;

    const renderStars = () => {
        let stars = [];
        for (let i = 1; i <= totalStars; i++) {
            if (i <= Math.floor(count)) {
                // Tam sayı kadar tam yıldız ekleyin
                stars.push(<BsStarFill key={i} color="#FFD700" size="24px" />);
            } else if (i === Math.floor(count) + 1 && count % 1 >= 0.5) {
                // Eğer count'ta ondalıklı bir kısım varsa ve bu kısım 0.5 veya daha büyükse,
                // bu durumda tam yıldızın yerine bir yarım yıldız ekleyin
                stars.push(<BsStarHalf key={i} color="#FFD700" size="24px" />);
            } else {
                // Geri kalan kısım için boş yıldızlar ekleyin
                stars.push(<BsStar key={i} color="#FFD700" size="28px" />);
            }
        }
        return stars;
    };
    return (
        <Flex flexDirection={"row"} alignItems={"center"}  justifyContent="center" gap={1}  p={"20px"} >
          {renderStars()}
        </Flex>
      );
}

export default Rating