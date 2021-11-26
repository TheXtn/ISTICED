import {
    Button, chakra,
    Container,
    Flex,
    FormControl,
    FormLabel,
    GridItem,
    Heading,
    Input, InputGroup, InputLeftElement, InputRightElement,
    SimpleGrid, HStack,
    Text, useColorMode, useColorModeValue, useToast,
    VStack, Box, Progress, Stack, useDisclosure, ScaleFade,
} from "@chakra-ui/react";
import React, {useState} from "react";
import NextImage from "next/image";
import {FaLock, FaUserAlt} from "react-icons/fa";
import {useRouter} from "next/router";
import {signIn} from "next-auth/client";
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
export default function Ho(){
    const [mat,setmat]=useState("")
    const {toggleColorMode}=useColorMode()
    const { isOpen, onToggle } = useDisclosure()
    const bg=useColorModeValue("gray.50","whiteAlpha.50")
    return(

        <Stack h={["auto","100vh"]} py={20} direction={['column','row']} spacing={10}  >

        <VStack boxShadow="2xl" bgColor={bg} w={"full"} h={"full"} p={10} spacing={10} alignItems={"flex-start"} direction={['column','row']}>
            <VStack spacing={10}>
                <Button color={"white"} bg="#5000ca" w={"full"} onClick={onToggle}>Semestre 1</Button>
                <Button color={"white"} bg="#5000ca" w={"full"} onClick={onToggle}>Semestre 2</Button>

            </VStack>
        </VStack >
            <ScaleFade initialScale={0.9} in={isOpen}>
                <VStack boxShadow="2xl" bgColor={bg} w={"full"} h={"full"} p={10} spacing={10} alignItems={"flex-start"} direction={['column','row']}>
                    <VStack spacing={10}>
                        <Button color={"white"} bg="#5000ca" w={"full"} onClick={()=>setmat("Analyse")}>Analyse</Button>
                        <Button color={"white"} bg="#5000ca" w={"full"} onClick={()=>setmat("Algebre")}>Algorithme</Button>
                        <Button color={"white"} bg="#5000ca" w={"full"} onClick={()=>setmat("Systeme Logique")}>Systeme Logique</Button>
                    </VStack>
                </VStack>
            </ScaleFade>
            <ScaleFade initialScale={0.9} in={isOpen}>
            <VStack boxShadow="2xl" bgColor={bg} w={"full"} h={"full"} p={10} spacing={10} alignItems={"flex-start"} direction={['column','row']}>
                <SimpleGrid spacing={5} columns={2} row={2}>
                    <GridItem colSpan={2}>
                        <Heading>{mat}</Heading>

                    </GridItem>
                    <GridItem colSpan={1}>
                        <Input type="text" placeholder={"DS"} />
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Input type="text" placeholder={"EXAM"} />
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Input type="text" placeholder={"MOYENNE"} />
                    </GridItem>

                </SimpleGrid>
            </VStack>
            </ScaleFade>
        </Stack>


    )
}