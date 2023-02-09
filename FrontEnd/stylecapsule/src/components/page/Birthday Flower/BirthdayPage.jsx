import { Box, Flex, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { FilterBox } from "../Valentine/FilterBox/FilterBox";
import { SingleProductAddToCartBox } from "../SingleProductAddToCartBox/SingleProductAddToCartBox"
import { PaginationBox } from "../Valentine/Pagination/PaginationBox";
export const BirthdayPage = () => {
  const [Loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);
  const [list, setList] = useState([]);

  const getData = async (page) => {
    try {
      return await axios.get(`http://localhost:4000/Birthday_Flowers/??page=${page}&limit=8`);
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    setLoading(true)
    getData()
   .then((res) => {
     setList(res.data.BirthdayFlowers)
     setTotal(res.data.totalPages);
     setLoading(false)})
   .catch((err) => console.log(err));
}, [page]);

  return (
    <>
    <Flex  gap="8"   display={["grid", "grid", "grid", "flex"]}  w="95%"  m="auto" mt="2rem">
    <Box>
      <FilterBox /> 
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
            <SingleProductAddToCartBox product={product} i={i} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  </Flex>

  <Box
        mb="2rem"
        display={"grid"}
        justifyContent={"center"}
        m="auto"
        mt="1rem"
        w="80%"
      >
        {" "}
        <PaginationBox page={page} setPage={setPage} total={total} />
      </Box>

      </>
  );
};
