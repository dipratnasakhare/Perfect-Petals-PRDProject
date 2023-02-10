import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";

export const ThankYouBox = () => {
    return (
        <Box w="80%" m="auto">
      <Box >
        <Image m="auto" src="https://denhamsflorist.com/wp-content/uploads/2016/12/home-04-i14-1.png" />
      </Box>
      <Box>
        <Box display={"grid"} justifyContent={"center"} >
          {" "}
          <Heading textAlign={"center"}>We'd Love to Help!</Heading>
        </Box>
        <Box display={"grid"} justifyContent={"center"}>
          {" "}
          <Heading textAlign={"center"} color="#75963d">- Tell us more about your big day -</Heading>
        </Box>
      </Box>
    </Box>
    )
}
