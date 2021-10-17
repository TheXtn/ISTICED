import {
    Button, chakra,
    Container,
    Flex,
    FormControl,
    FormLabel,
    GridItem,
    Heading,
    Input, InputGroup, InputLeftElement, InputRightElement,
    SimpleGrid,
    Text, useColorMode, useColorModeValue, useToast,
    VStack, Box, Progress,
} from "@chakra-ui/react";
import React, {useState} from "react";
import img from "../../public/login.svg"
import NextImage from "next/image";
import {FaLock, FaUserAlt} from "react-icons/fa";
import {useRouter} from "next/router";
import {signIn} from "next-auth/client";
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
export default function Ho(){

    const {toggleColorMode}=useColorMode()
    const bg=useColorModeValue("gray.10","whiteAlpha.50")
    return(

            <Flex h={["auto","100vh"]} py={20} direction={['column-reverse','row']}>



            </Flex>


    )
}