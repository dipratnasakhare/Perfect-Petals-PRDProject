import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";

export const ImageBox = () => {
    return (
    <Box
      w="100%"
      m="auto"
      h={["40rem", "40rem"]}
      backgroundRepeat={"none"}
      backgroundSize={"cover"}
      display="grid"
      backgroundImage={
        "https://denhamsflorist.com/wp-content/uploads/2013/06/home-slider-image-1.jpg"
      }
    >
      <Center>
        <Box w={["90%", "60%"]} backgroundImage={"https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} borderRadius={"10px"}
        >
          <Center>
            <Heading
              p="15px"
              color="green.600"
              fontFamily={"Lato"}
              as="h2"
              size="2xl"
              m="auto"
              w="99%"
            >
              Perfect Petals
              world Best florist
            </Heading>
          </Center>
        </Box>
      </Center>
    </Box>
  );
};

