<<<<<<< HEAD
import React, { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
  Input,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [searchText, setSearchText] = useState(""); // Kullanıcının girdiği arama metnini tutmak için state
  const navigate = useNavigate();
  const handleSearch = () => {
    // Burada arama işlemini gerçekleştirebilirsiniz, örneğin:
    console.log("Aranan metin:", searchText);
    // Arama işlemini gerçekleştirdikten sonra arama kutusunu temizleyebilirsiniz
    setSearchText("");
  };
  const handleClick = () => {
    navigate(`/singup`);
  };
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Image src="/banasorlogo.png" alt="Logo" w={20} h={20} />

          <Flex></Flex>

          {/* Arama kutusu */}
          <Input
            type="text"
            placeholder="Ara..."
            bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
            border={0}
            _focus={{
              bg: "whiteAlpha.300",
            }}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            htmlSize={50}
            width="auto"
            ml={20}
          />
          {/* Arama düğmesi */}
          <Button
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            onClick={handleSearch}
          >
            Ara
          </Button>
          <Flex display={{ base: "none", md: "flex" }} ml={10}></Flex>
        </Flex>
        <Flex></Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
          >
            GİRİŞ YAP
          </Button>

          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            bg={useColorModeValue("blue.400", "blue.800")}
            color={useColorModeValue("white", "gray.800")}
            _hover={{
              bg: "blue.600",
            }}
            onClick={handleClick}
          >
            KAYIT OL
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity></Collapse>
    </Box>
  );
};

export default Navbar;
=======
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Avatar, Box, Button, Container, Flex, Link } from '@chakra-ui/react'
import  { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate()

  // Dışa tıklama kontrolü için
  useEffect(() => {
      const checkIfClickedOutside = e => {
          // Eğer açıkken ve dışarıya tıklanmışsa kapat
          if (isOpen && ref.current && !ref.current.contains(e.target)) {
              setIsOpen(false);
          }
      }

      document.addEventListener("mousedown", checkIfClickedOutside);

      return () => {
          // Temizlik yap
          document.removeEventListener("mousedown", checkIfClickedOutside);
      }
  }, [isOpen]);
  const handleClick = () =>{
    navigate(`/profile/${"Alperen Akal"}`)
  }
  return (
    <Flex display={"flex"} justifyContent={"flex-end"} padding={"10px"}  position={"relative"}>
    <img
        src="/emine.jpg"
        alt="Avatar"
        onClick={() => setIsOpen(oldOpen => !oldOpen)}
        style={{ width: 50, height: 50, cursor: 'pointer',   borderRadius: '50%'}}
        
    />
    {isOpen && (
        <div style={{ position: 'absolute', top: '55px', right: 0, background: 'white', boxShadow: '0 2px 5px rgba(0,0,0,0.2)', zIndex: 1000, display:"block" }}>
            {/* Menü içeriği burada olacak */}
            <Button onClick={handleClick}>Profil</Button>
            <a href="/settings">Settings</a>
            <a href="/logout">Logout</a>
        </div>
    )}
</Flex>
  )
}

export default Navbar
>>>>>>> cb161430c82df1d0061a7f718c31496289b94593
