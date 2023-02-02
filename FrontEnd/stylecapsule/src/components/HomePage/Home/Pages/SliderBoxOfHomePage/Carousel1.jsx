import { Box, Center, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Carousel = () => {
  return (
    <Box
      w="100%"
      m="auto"
      h={["20rem", "20rem"]}
      backgroundRepeat={"none"}
      backgroundSize={"cover"}
      display="grid"
      backgroundImage={
        "https://denhamsflorist.com/wp-content/uploads/2013/06/home-slider-image-1.jpg"
      }
    >
      <Center>
        <Box w="30%" bg="white" borderRadius={"5%"}
      //  backdropFilter='blur(10px) hue-rotate(90deg)'

        >
          <Center>
            <Heading
              p="15px"
              color="green.600"
              fontFamily={"Lato"}
              as="h2"
              size="2xl"
            >
              (2xl) In love with React & Next
            </Heading>
          </Center>
        </Box>
      </Center>
    </Box>
  );
};

export default Carousel;
