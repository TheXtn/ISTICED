import {
    Button, chakra,
    Container,
    Flex,
    FormControl,
    FormLabel,
    GridItem,
    Heading, Select,
    Input, InputGroup, InputLeftElement, InputRightElement,
    SimpleGrid, HStack,
    Text, useColorMode, useColorModeValue, useToast,
    VStack, Box, Progress, Stack, useDisclosure, ScaleFade, Spinner,
} from "@chakra-ui/react";
import useSWR from 'swr'
import React, {useState} from "react";
import NextImage from "next/image";
import {FaLock, FaUserAlt} from "react-icons/fa";
import {useRouter} from "next/router";
import {getSession, signIn} from "next-auth/client";
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const fetcher = url => fetch(url).then(r => r.json())
export default function Ho(){
    const { data, error } = useSWR('/api/Subjects', fetcher)
    const [mat,setmat]=useState("")
    const [sem,setsem]=useState("")
    const [subjects,setsubjects]=useState([])
    const {toggleColorMode}=useColorMode()
    const [isOpen,setisopen]=useState(false)
    const [isopen2,setisopen2]=useState(false)
    const bg=useColorModeValue("gray.50","whiteAlpha.50")
    function handleclick(e){
        setmat(e.target.value)
        setisopen2(true)
    }
    async function handleclick2(e){
        setsem(e.target.value)
        setisopen(true)

    }
    function ShowSub(){


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
                    <VStack spacing={10} w={"full"} h={"full"}>
                        {data?<div> <Select onChange={handleclick}>
                            {data.Subjects.map((Subject)=>{
                                return(

                                <option key={Subject} value={Subject}>{Subject}</option>


                                )})}
                            </Select>
                        </div>
                            :

                            <p><Spinner size="xl" /></p>}

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

