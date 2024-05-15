import React from 'react'
import { Button, Flex, IconButton, InputGroup, InputRightElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { Input } from '@chakra-ui/react'

const KisiArama = () => {



    return (
        <Flex>
            <InputGroup w="470px" size='md'>
                <Input
                    pr='4.5rem'
                    type={'text'}
                    placeholder='Profilleri arayabilirsin. '
                />
                <InputRightElement >
                   
                    <IconButton  h='1.75rem' size='sm' aria-label='Search database' icon={<SearchIcon />} />
                 
                </InputRightElement>
            </InputGroup>
        </Flex>
    )
}

export default KisiArama
