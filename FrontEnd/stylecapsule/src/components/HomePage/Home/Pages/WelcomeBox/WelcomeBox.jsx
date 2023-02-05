import { Box, Button, Heading, Text, Image, Grid, Flex } from "@chakra-ui/react";
import React from "react";

export const WelcomeBox = () => {
  return (
    <Flex  w="80%" gap="20px" display={["grid", "grid", "grid", "flex"]} m="auto" >
      <Grid w="100%" gap="10px" >
        <Box  display="grid" alignContent={"flex-end"}>
          <Heading fontFamily={"serif"} size="xl" color="gray.400">
            BEST FLORIST IN WORLD!
          </Heading>
        </Box>
        <Box display="grid" alignContent={"center"}>
          {" "}
          <Heading fontFamily={"serif"} color="gray.500" size="2xl">
            Welcome to Denham's Florist
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
          <Button bg="purple.400" _hover={"none"}><Text>Start Your Order</Text></Button>
        </Box>
      </Grid>
      <Box w="100%">
        <Image  src="https://denhamsflorist.com/wp-content/uploads/2019/02/every-occasion-1.png" />
      </Box>
    </Flex>
  );
};
