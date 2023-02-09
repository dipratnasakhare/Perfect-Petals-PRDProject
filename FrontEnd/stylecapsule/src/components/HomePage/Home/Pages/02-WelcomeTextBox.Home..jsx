import { Box, Button, Heading, Text, Image, Grid, Flex } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const WelcomeTextBox = () => {
  const navigate = useNavigate()
  return (
    <Box w="80%"  display={["grid", "grid", "grid", "flex"]} m="auto" >
      <Box className="welcomeBox_app_css"   w="100%"  >
        <Box>
          <Heading  textAlign={"center"} fontFamily={"serif"} size="xl" color="gray.400">
            BEST FLORIST IN WORLD!
          </Heading>
        </Box>
        <Box >
          {" "}
          <Heading textAlign={"center"} fontFamily={"serif"} color="gray.500" size="2xl">
            Welcome to Perfect Petals Shop
          </Heading>
        </Box>
        <Box >
          <Text>
            We're a full service florist in Columbus Georgia, specializing in
            weddings, parties, corporate events, and daily deliveries throughout
            the greater Columbus area. We take pride in our work, and customer
            satisfaction. We have an exceptional variety of fresh flowers, live
            plants, and unique gift items for all ages and occasions. Place your
            order today!
          </Text>
        </Box>
        <Box  display={"grid"} >
          <Button onClick={()=> navigate("/Valentine_Flowers")} bg="purple.400" _hover={"none"}><Text>Start Your Order</Text></Button>
        </Box>
      </Box>
      <Box w="100%">
        <Image  src="https://denhamsflorist.com/wp-content/uploads/2019/02/every-occasion-1.png" />
      </Box>
    </Box>
  );
};
