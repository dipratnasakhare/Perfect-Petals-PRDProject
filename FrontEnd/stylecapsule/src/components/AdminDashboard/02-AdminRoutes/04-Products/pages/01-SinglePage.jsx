import React, { useEffect, useState } from "react";
import { Box, Grid, Text, Image, Flex, Input, Button } from "@chakra-ui/react";
import { BsStar } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import axios from "axios";

export const SinglePage = ({ product, i, HandelEditProduct }) => {
  const [Price, setPrice] = useState(false);
  const [name, setName] = useState(false)

  const [ProductName, setProductName] = useState("")
  const [ProductPrice, setProductPrice] = useState("")

  useEffect(()=> {
    // setProductName(product.Name)
    // setProductPrice(product.Price)
  }, [])

  return (
    <Box key={i / Date.now()} boxShadow="lg" rounded="md" bg="white">
      <Box bg="white" >
        <Box h="13.5rem" overflow="hidden">
          <Image src={product.ImgUrlList[0]} />
        </Box>
        <Box p="15px" pt={["34px", "16px", "16px"]}>
          <Box pb="10px" mb="40px">
            <Grid gap="1">
              {name ? <Input value={ProductName} onChange={(e)=> setProductName(e.target.value)}/> :  <Text as="b" color="black">
                  {product.Name}
                </Text>}
              <Text textAlign={"start"}>
               
                <BiEdit onClick={() => setName(!name)} />
              </Text>
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
              {Price ? <Input value={ProductPrice}  onChange={(e)=> setProductPrice(e.target.value)}/> : <Text as="b" color="black">
                {product.Price}
              </Text>}
              
              <BiEdit onClick={() => setPrice(!Price)} />
            </Grid>
            {ProductName !== "" || ProductPrice !== "" ? <Button mt="5px" onClick={()=>{
              setName(false)
              setPrice(false)
              HandelEditProduct(ProductName, product["_id"], ProductPrice)
              setProductName(ProductName)
              setProductPrice(ProductPrice)
              }} _hover={"none"} bg={"green"}>Submit</Button> : ""}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
