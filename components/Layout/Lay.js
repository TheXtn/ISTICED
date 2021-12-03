import { Fragment } from 'react';
import {Nav} from "./index";
import SmallWithSocial from "./footer";
import classes  from "./lay.module.css"
import {Container} from "@chakra-ui/react";

function Lay(props) {
  return (
    <Fragment

    >

      <Container h={["180vh","100vh"]} maxW={"container.xl"} p={0}>
        {props.children}
      </Container>





    </Fragment>
  );
}

export default Lay;
