import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Badge, Container, Heading, HStack, VStack} from "@chakra-ui/react";
import Link from 'next/link'

import {
    Divider,
    Box,
    Text,
    Button,
    Center,
    Square,
    Circle,
    Stack,
    Flex,
    useColorModeValue
} from "@chakra-ui/react"
import {Fragment, useState} from "react";
import NextImage from "next/image";
import img from "../public/coding.svg";
import img2 from "../public/graduation-animate.svg"
import img3 from "../public/product-teardown-animate.svg"
import img4 from "../public/anni.svg"
import Fade from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
export default function Home() {
    const bg=useColorModeValue("gray.10","whiteAlpha.50")
    return(
    <VStack w={'full'} h={'full'}>
        <Flex h={["auto","100vh"]} py={20} direction={['column-reverse','row']}>
          
            <VStack w={"full"} h={"full"} p={10} spacing={20} alignItems={"flex-start"} bg={bg} boxShadow="2xl" rounded="md"   >

                <VStack spacing={10} alignItems={"flex-start"}>
                    <Heading color={"#660066"}>Istic Borj Cedria</Heading>
                    <Badge ml="1" fontSize="0.8em" colorScheme="purple">Internal Platform</Badge>
                </VStack>
                <Box maxW="32rem">
                    <Heading  color={useColorModeValue("black","white")} mb={4}>Welcome to ISTIC Internal Platform</Heading>
                    <Text fontSize="xl">
                        Your university marks and stats will be shown here .
                    </Text>
                    <Divider colorScheme={'purple'} size={"300"}/>
                    <br/>
                    <Link href={'/student'}>
                        <Button bg="#5000ca" color='white' size="lg">
                            Student Area
                        </Button>
                    </Link>
                </Box>

            </VStack>
         
            <VStack w={"full"} h={"full"} p={10} spacing={10} alignItems={"flex-start"} direction={['column','row']} >

                <NextImage
                    src={img}
                    width="500"
                    height="500"
                    alt={"Hello"}
                    placeholder="blur"
                    blurDataURL="L8LE.{~60000_3V@ITx^00t:V?-P"
                />



            </VStack>
        </Flex>

    <Flex h={["auto","100vh"]} py={20} direction={['column-reverse','row']}>
        <Fade  >
        <VStack w={"full"} h={"full"} p={10} spacing={10} alignItems={"flex-start"} direction={['column','row']} >
            <Bounce right cascade>
            <NextImage
                src={img2}
                width="500"
                height="500"
                alt={"Hello"}
                placeholder="blur"
                blurDataURL="L8LE.{~60000_3V@ITx^00t:V?-P"
            /></Bounce>



        </VStack></Fade>
        <Fade>
        <VStack w={"full"} h={"full"} p={10} spacing={20} alignItems={"flex-start"} bg={bg} boxShadow="2xl" rounded="md"   >

            <VStack spacing={10} alignItems={"flex-start"}>
                <Heading color={"#660066"}>RealTime Results</Heading>
                <Badge ml="1" fontSize="0.8em" colorScheme="purple">Internal Platform</Badge>
            </VStack>
            <Box maxW="32rem">
                <HStack>
                    <Heading  color={useColorModeValue("black","white")} mb={4}>Results details</Heading>
                <NextImage
                    src={img4}
                    width="350"
                    height="350"
                    alt={"Hello"}
                    placeholder="blur"
                    blurDataURL="L8LE.{~60000_3V@ITx^00t:V?-P"
                />

                </HStack><Text fontSize="xl">
                <Bounce bottom cascade>Consult your results anytime you want .</Bounce>



            </Text>
                <Divider colorScheme={'purple'} size={"300"}/>

                <br/>

            </Box>

        </VStack></Fade>


    </Flex>
        <Flex h={["auto","100vh"]} py={20} direction={['column-reverse','row']}>
            <Fade>
                <VStack w={"full"} h={"full"} p={10} spacing={20} alignItems={"flex-start"} bg={bg} boxShadow="2xl" rounded="md"   >

                    <VStack spacing={10} alignItems={"flex-start"}>
                        <Heading color={"#660066"}>From anywhere</Heading>
                        <Badge ml="1" fontSize="0.8em" colorScheme="purple">Internal Platform</Badge>
                    </VStack>
                    <Box maxW="32rem">
                        <Heading  color={useColorModeValue("black","white")} mb={4}>Device Friendly</Heading>
                        <Text fontSize="xl">
                            <Bounce bottom cascade>Consult your results from anywhere .</Bounce>



                        </Text>
                        <Divider colorScheme={'purple'} size={"300"}/>
                        <br/>

                    </Box>

                </VStack></Fade>
            <Fade  >
                <VStack w={"full"} h={"full"} p={10} spacing={10} alignItems={"flex-start"} direction={['column','row']} >
                    <Bounce right cascade>
                        <NextImage
                            src={img3}
                            width="500"
                            height="500"
                            alt={"Hello"}
                            placeholder="blur"
                            blurDataURL="L8LE.{~60000_3V@ITx^00t:V?-P"
                        /></Bounce>



                </VStack></Fade>



        </Flex>
    </VStack>



    )
}
