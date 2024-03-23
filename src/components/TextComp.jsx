import { Text } from '@chakra-ui/react'
import React from 'react'

const TextComp = ({text}) => {
  return (
    <>
    <Text
    whiteSpace="pre-line"
    fontFamily="Source Code Pro, monospace" // Projenize uygun bir font ile değiştirebilirsiniz.
    fontSize={"40px"} // Responsive font boyutu ayarı
    textAlign="center"
    lineHeight="taller"
    mt={5} // Üstten boşluk ekleyerek metni daha rahat okunabilir yapar
    fontWeight={"bold"}
    color={"dark"}
>
 {text}
</Text>
</>
  )
}

export default TextComp