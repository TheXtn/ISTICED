import styless from "../../config/config.module.css";
import Particles from "react-particles-js";
import config from "../../config/config";
import {Heading, VStack} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import {Link as L} from "react-scroll";
import img from "../../public/bg.svg";
import NextImage from "next/image";

export default function Wrap(){
    return(
        <VStack spacing={10} className={styless.con}>
            <div className={styless.particles} >

            </div>
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
        )

}