import { Box, Flex, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { FilterBox } from "./FilterBox/FilterBox";
import { SingleProductBox } from "./SingleProductBox/SingleProductBox";

export const ValentinePage = () => {
  const [Loading, setLoading] = useState(false);
  
  const [list, setList] = useState([]);

  const getData = async () => {
    try {
      return await axios.get("http://localhost:4000/valentine_Day/");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData()
      .then((res) => setList(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(list);
  return (
    <Flex border="5px solid red">
      <Box w="20%" h="5rem" border={"3px solid green"}>
        <FilterBox />
      </Box>
      <Box w="80%" h="5rem" border={"3px solid green"}>
        <SimpleGrid columns={[1, 2, 2, 4]} spacing={10}>
          {list.map((product, i) => {
            return <SingleProductBox product={product} i={i} />;
          })}
        </SimpleGrid>
      </Box>
    </Flex>
  );
};
