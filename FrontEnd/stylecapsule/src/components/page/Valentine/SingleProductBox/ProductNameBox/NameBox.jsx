import React from 'react'
import { Flex, Text, Box, SimpleGrid, Grid } from "@chakra-ui/react";
import { BsStar } from "react-icons/bs"


export const NameBox = ({data}) => {

  return (
    <Box pb="18px" mb="40px">
      Name 
    <Grid gap="1" >
      <Text textAlign={"start"}>
        <Text as="b" color="black">
          {data.Name}
        </Text>
      </Text>
      {/* <Text color="black">subtitle</Text> */}
      <Text color="black"> <Flex gap="3">
        <Text>rating</Text>
          <Box w="25px" mt="3px"><BsStar /></Box>
          {/* {} */}
        </Flex>
       </Text>
      
      <SimpleGrid columns={3} spacing={[0]}>
        <Text as="b" color="black">
          Bought   {data.Bought}
        </Text>
    
      </SimpleGrid>
    
    </Grid>
  </Box>
  )
}
