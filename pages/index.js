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
import { Link as L } from 'react-scroll'
import {Fragment, useState} from "react";
import NextImage from "next/image";
import img from "../public/coding.svg";
import img2 from "../public/graduation-animate.svg"
import img3 from "../public/product-teardown-animate.svg"
import img4 from "../public/anni.svg"
import Fade from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import Particles from 'react-particles-js';
import config from "../config/config"
import styless from "../config/config.module.css"
import Typewriter from 'typewriter-effect'
import Zoom from 'react-reveal/Zoom'

export default function Home() {

    const bg =useColorModeValue("gray.10","whiteAlpha.50")
    return(
        <div className={styless.html}>
            <VStack spacing={10} className={styless.con}>
                <Particles className={styless.particles} params={config.particles} >

                </Particles>
                <Heading color={"#660066"} className={styless.centered}>Hello, Welcome To <span className={styless.name}>ISTIC</span>.{' '}
                    <span className="wave-emoji" role="img" aria-label="waving hand">
                👋
              </span>
                    <br/>
                    <Typewriter
                        options={{
                            strings: [
                                'LGLSI.',
                                'ISI.',
                                'LAII.',
                                'LT.',
                            ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 10,
                            cursor: '<',
                            delay: 100,
                        }}
                    />
                    <br/>
                    <L
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-63}
                        duration={500}
                    >
                        ﹀
                    </L>
                </Heading>



            </VStack>


    <VStack w={'full'} h={'full'}>

        <Flex className={styless.home} h={["auto","100vh"]} py={20} direction={['column-reverse','row']} id={"home"}>
            <Zoom>
            <VStack  w={"full"} h={"full"} p={10} spacing={20} alignItems={"flex-start"} bg={bg} boxShadow="2xl" rounded="md"   >

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

            </VStack></Zoom>
            <Zoom>
            <VStack w={"full"} h={"full"} p={10} spacing={10} alignItems={"flex-start"} direction={['column','row']} >

                <NextImage
                    src={img}
                    width="500"
                    height="500"
                    alt={"Hello"}
                    placeholder="blur"
                    blurDataURL="L8LE.{~60000_3V@ITx^00t:V?-P"
                />



            </VStack></Zoom>
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
                <Text fontSize="xl">
                    <Bounce bottom cascade>Consult your results anytime you want .</Bounce>



                </Text>
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

                </HStack>
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
    </VStack>   </div>



    )
}
