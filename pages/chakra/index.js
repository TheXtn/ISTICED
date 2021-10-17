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
    const [cin,setcin]=useState('')
    const [pwd,setpwd]=useState('')
    const [showPassword, setShowPassword] = useState(false);
    const toast=useToast()
    const [loading,setloading]=useState(false)
    const router=useRouter()
    const handleShowClick = () => setShowPassword(!showPassword);
    async function handlesubmit(e){
        e.preventDefault()
        setloading(true)
        console.log(cin,pwd)
        const res=await signIn('credentials',{
            redirect:false,
            cin:cin,
            password:pwd
        })
        if (!res.error){
            toast({
                title: "Welcome.",
                description: "You can check your data now",
                status: "success",
                duration: 9000,
                isClosable: true,
            })
            router.replace('/')
        }
        else {
            setloading(false)
            toast({
                title: "Error.",
                description: res.error,
                status: "error",
                duration: 9000,
                isClosable: true,
            })
        }
    }
    const {toggleColorMode}=useColorMode()
    const bg=useColorModeValue("gray.10","whiteAlpha.50")
    return(

            <Flex h={["auto","100vh"]} py={20} direction={['column-reverse','row']}>

                <VStack w={"full"} h={"full"} p={10} spacing={10} alignItems={"flex-start"} bg={bg} boxShadow="md">
                    <VStack spacing={4} alignItems={"flex-start"}>
                        <Heading color="purple">Login</Heading>

                    </VStack>
                    <Box minW={["full","full"]}>
                    <form onSubmit={handlesubmit}>
                    <SimpleGrid columns={2} columnGap={3} rowGap={6} w={"full"}>

                        <GridItem colSpan={2}>
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"

                                        children={<CFaUserAlt color="gray.300" />}
                                    />
                                    <Input value={cin} onChange={(e)=>setcin(e.target.value)} type="text" placeholder="CIN "  disabled={loading} />
                                </InputGroup>
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={2}>


                            <FormControl>
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        color="gray.300"
                                        children={<CFaLock color="gray.300" />}
                                    />
                                    <Input
                                        disabled={loading}
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        value={pwd} onChange={(e)=>setpwd(e.target.value)}
                                    />
                                    <InputRightElement width="4.5rem">
                                        <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                            {showPassword ? "Hide" : "Show"}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Button type="submit"  w={"full"}>Login</Button>
                        </GridItem>
                        <GridItem colSpan={2}>
                            {loading?<Progress color={"purple"} size="xs" isIndeterminate />:""}
                        </GridItem>
                    </SimpleGrid>

                    </form> </Box>

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


    )
}