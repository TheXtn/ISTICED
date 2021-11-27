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
import {getSession, signIn} from "next-auth/client";
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
export default function Ho(){
    const [mat,setmat]=useState("")
    const [sem,setsem]=useState("")
    const {toggleColorMode}=useColorMode()
    const { isOpen, onToggle } = useDisclosure()
    const [isopen2,setisopen2]=useState(false)
    const bg=useColorModeValue("gray.50","whiteAlpha.50")
    function handleclick(e){
        setmat(e.target.value)
        setisopen2(!isopen2)
    }
    function  handleclick2(e){
        setsem(e.target.value)
        onToggle()
    }
    return(

        <Stack h={["auto","100vh"]} py={20} direction={['column','row']} spacing={10}  >

        <VStack boxShadow="2xl" bgColor={bg} w={"full"} h={"full"} p={10} spacing={10} alignItems={"flex-start"} direction={['column','row']}>
            <VStack spacing={10}>
                <Button color={"white"} bg="#5000ca" w={"full"} value={"Semestre 1"} onClick={handleclick2}>Semestre 1</Button>
                <Button color={"white"} bg="#5000ca" w={"full"} value={"Semestre 2"} onClick={handleclick2}>Semestre 2</Button>

            </VStack>
        </VStack >
            <ScaleFade initialScale={0.9} in={isOpen}>
                <VStack boxShadow="2xl" bgColor={bg} w={"full"} h={"full"} p={10} spacing={10} alignItems={"flex-start"} direction={['column','row']}>
                    <Heading>{sem}</Heading>
                    <VStack spacing={10}>

                        <Button color={"white"} bg="#5000ca" w={"full"} value={"Analyse"} onClick={handleclick}>Analyse</Button>
                        <Button color={"white"} bg="#5000ca" w={"full"} value={"Algebre"} onClick={handleclick}>Algorithme</Button>
                        <Button color={"white"} bg="#5000ca" w={"full"} value={"Systeme Logique"} onClick={handleclick}>Systeme Logique</Button>
                    </VStack>
                </VStack>
            </ScaleFade>
            <VStack   w={"full"} h={"full"} p={10} spacing={10} alignItems={"flex-start"} direction={['column','row']}>
            <ScaleFade initialScale={0.9} in={isopen2}>
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
            </VStack>
        </Stack>


    )
}
export async function getServerSideProps(context) {
    const session = await getSession(context)

    if(!session){
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    return {
        props: { session }
    }
}

