import { Box, Flex, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

import axios from "axios";
import React, { useEffect, useState } from "react";
// import { FilterBox } from "./FilterBox/FilterBox";
import { SingleProductBox } from "../SingleProductBox/SingleProductBox"


export const Gift_Baskets_Food = () => {
  const [Loading, setLoading] = useState(false);
  
  const [list, setList] = useState([]);

  const getData = async () => {
    try {
      return await axios.get("http://localhost:4000/Gift_Baskets_Food/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setLoading(true)
    getData()
   .then((res) => {
     setList(res.data)
     setLoading(false)})
   .catch((err) => console.log(err));
}, []);

  return (
    <Flex  display={["grid", "grid", "grid", "flex"]}   m="auto" mt="2rem">
    <Box w="18%"  border={"2px solid red"}>
      FilterBox 
    </Box>
    <Box w="80%" m="auto" >
      {Loading ? (
        <Box
          h="40rem"
          display="grid"
          justifyContent={"center"}
          alignContent="center"
        >
          {" "}
          <Box>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Box>
        </Box>
      ) : (
            <SimpleGrid columns={[1, 2, 2, 4]} spacing={10} display="grid">
          {list.map((product, i) => (
            <SingleProductBox product={product} i={i} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  </Flex>
  );
};
