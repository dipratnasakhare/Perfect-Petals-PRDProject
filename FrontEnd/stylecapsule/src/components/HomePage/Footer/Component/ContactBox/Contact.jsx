import {
  Box,
  Button,
  Grid,
  Heading,
  Icon,
  Input,
  Link,
  Text,
  Flex
} from "@chakra-ui/react";
import React from "react";

import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
// import { AiOutlineMail } from "react-icons/ai";

export const Contact = () => {
  const address = [
    // { logo: CiLocationOn, add: "Gondia Maharashtra"},
    { logo: BsTelephone, add:"91+ 9109760018" },
  ];

  return (
    <Box >
      <Grid  w={["100%", "80%", "80%"]} gap="10" m="auto" mt="1rem" mb="1rem" textAlign="start" >
        {address.map((ele) => {
          return (
           <Flex w="99%" m="auto" >
            <Link href={ele.link}>
              <Button position={"-moz-initial"}>
                <Icon  as={ele.logo} />
              </Button>
            </Link>
            <Text pl="5px"  fontSize={["sm", "sm", "sm" ,'xl']}>{ele.add}</Text>
           </Flex>
          );
        })}
      </Grid>

      <Box w="60%" gap="10" m="auto">
        <Input
          borderRadius={"0px"}
          border="1px solid black"
          mb="8"
          h="45px"
          placeholder="Name"
          size="sm"
        />
        <Input
          borderRadius={"0px"}
          border="1px solid black"
          mb="8"
          h="45px"
          placeholder="Email"
          size="sm"
        />
        <Input
          borderRadius={"0px"}
          border="1px solid black"
          mb="8"
          h="45px"
          placeholder="Subject"
          size="sm"
        />
        <Input
          borderRadius={"0px"}
          border="1px solid black"
          mb="8"
          h="45px"
          placeholder="Message"
          size="sm"
        />
        <Button borderRadius={"0px"}
          w="100%"         
          h="45px"
          size="sm" colorScheme='blue' >
           <Text> Submit</Text>
  </Button>
      </Box>
    </Box>
  );
};
