import React, { useEffect, useState } from "react";
import { Box, Grid, Text, Image, Flex, Input, Button } from "@chakra-ui/react";
import { BsStar } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import axios from "axios";

export const SinglePage = ({ product, i, HandelEditProduct }) => {
  useEffect(() => {
    // setProductName(product.Name)
    // setProductPrice(product.Price)
  }, []);

  return (
    <Box key={i / Date.now()} boxShadow="lg" rounded="md" bg="white">
      <Box bg="white">
        <Box>
          <Image src={product.ImgUrlList[0]} />
        </Box>
        <Box p="15px">
          <Box pb="10px">
            <Grid gap="1">
              <Text>{product.Name}</Text>

              <Text color="black">
                {" "}
                <Flex gap="3">
                  <Text>rating</Text>
                  <Flex gap="1.5" w="25px" mt="3px">
                    {Array(5)
                      .fill(0)
                      .map((ele, i) =>
                        i < product.Rating ? (
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

              <Text color="black">Bought {product.Bought}</Text>
              <Text as="b" color="black">
                {product.Price}
              </Text>
              <BiEdit />
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
