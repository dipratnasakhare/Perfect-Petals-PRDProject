import React from "react";
import { Flex, Text, Box, Grid } from "@chakra-ui/react";
import { BsStar } from "react-icons/bs";

export const NameBox = ({ data }) => {
  return (
    <Box pb="18px" mb="40px">
      <Grid gap="1">
        <Text textAlign={"start"}>
          <Text as="b" color="black">
            {data.Name}
          </Text>
        </Text>
        {/* <Text color="black">subtitle</Text> */}
        <Text color="black">
          {" "}
          <Flex gap="3">
            <Text>rating</Text>
            <Flex gap="1.5" w="25px" mt="3px">
              {Array(5)
                .fill(0)
                .map((ele, i) =>
                  i < data.Rating ? (
                    <Box>
                      <BsStar fontSize={"1.2rem"} color="gold" />
                    </Box>
                  ) : (
                    <Box>
                      <BsStar fontSize={"1.2rem"} color="green" />
                    </Box>
                  )
                )}
            </Flex>
          </Flex>
        </Text>

          <Text  color="black">
            Bought {data.Bought}
          </Text>
        <Text as="b" color="black">
          {data.Price}
        </Text>
      </Grid>
    </Box>
  );
};
