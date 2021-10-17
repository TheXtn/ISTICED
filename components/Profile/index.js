import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import {chakra, Heading} from "@chakra-ui/react";
import Link from 'next/link'
import LoadingOverlay from 'react-loading-overlay';
import {
    useToast,
    Fade, ScaleFade, Slide, SlideFade,Progress,
    Divider,
    Box,
    Text,
    Button,
    Center,
    Square,
    Circle,
    Stack,
    Flex,
    FormControl,
    InputGroup,
    InputLeftElement,Input,InputRightElement,FormHelperText,
    useColorModeValue
} from "@chakra-ui/react"
import React, {Fragment, useState} from "react";
import NextImage from "next/image";
import img from "../../public/login.svg";
import { FaUserAlt, FaLock } from "react-icons/fa";
import Loading from "../UI/loading";
import {signIn} from 'next-auth/client'
import {useRouter} from "next/router";
import SocialProfileSimple from "./Card";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export default function ProfileComp(props) {
    const session=props.session
    return (
        <div className={styles.container}>



            <Box
                min-height='100%'
                height='100%'
                d={{ lg: "flex" }}
                justifyContent={{ lg: "center" }}
                alignItems={{ lg: "center" }}
                left={0}
                key={2}
            >



                                            <SocialProfileSimple session={session}/>


            </Box>


            
        </div>
    )
}
