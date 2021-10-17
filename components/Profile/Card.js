import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    Spinner,
    useColorModeValue,
} from '@chakra-ui/react';
import {useSession} from "next-auth/client";
import {useEffect, useState} from "react";

export default function SocialProfileSimple(props) {
    const [user,setuser]=useState({})
    const [load,setload]=useState(false)
    async function work(){
        setload(true)
        const cin=session.user.email
        const res=await fetch('/api/user',{
            method:'POST',
            body:JSON.stringify({cin}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const rep=await res.json()
        setuser(rep.user)
        setload(false)
    }
    const session=props.session
    useEffect(()=>{
        work()

    },[])
    return (
        <Center py={6}>
            <Box
                maxW={'320px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}>
                <Avatar
                    size={'xl'}
                    src={
                        'https://cdn0.iconfinder.com/data/icons/education-volume-1-3/48/33-512.png'}
                    alt={'Avatar Alt'}
                    mb={4}
                    pos={'relative'}
                    _after={{
                        content: '""',
                        w: 4,
                        h: 4,
                        bg: 'green.300',
                        border: '2px solid white',
                        rounded: 'full',
                        pos: 'absolute',
                        bottom: 0,
                        right: 3,
                    }}
                />
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                    {session.user.name}
                </Heading>

                <Text fontWeight={600} color={'gray.500'} mb={4}>

                </Text>
                <Text
                    textAlign={'center'}
                    color={useColorModeValue('gray.700', 'gray.400')}
                    px={3}>
                    ISTIC STUDENT
                </Text>
                <br/>
                {load?<Spinner size="xl" />: <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                    <Badge
                        px={2}
                        py={1}
                        bg={useColorModeValue('gray.50', 'gray.800')}
                        fontWeight={'400'}>
                        {user.section}
                    </Badge>
                    <Badge
                        px={2}
                        py={1}
                        bg={useColorModeValue('gray.50', 'gray.800')}
                        fontWeight={'400'}>
                        {user.level}
                    </Badge>
                    <Badge
                        px={2}
                        py={1}
                        bg={useColorModeValue('gray.50', 'gray.800')}
                        fontWeight={'400'}>
                        {user.group}
                    </Badge>
                </Stack>
                }

                <Stack mt={8} direction={'row'} spacing={4}>
                    <Button
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        _focus={{
                            bg: 'gray.200',
                        }}>
                        Section
                    </Button>
                    <Button
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        bg={'purple.600'}
                        color={'white'}
                        boxShadow={
                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                        }
                        _hover={{
                            bg: 'purple.600',
                        }}
                        _focus={{
                            bg: 'purple.600',
                        }}>
                        Group
                    </Button>
                </Stack>
            </Box>
        </Center>
    );
}