import { Box, SimpleGrid} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { PaginationBox } from "../../../page/Valentine/Pagination/PaginationBox";
import { SinglePage } from "./pages/01-SinglePage";

export const Products = () => {
  const [Loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(10);
  const [list, setList] = useState([]);

  const [name, setName] = useState(false)
  const [price, setPrice] = useState(false)

  const GetData = async () => {
    try {
      let res =  await axios.get(
        `${process.env.REACT_APP_MAIN_SERVER_URL}/valentine_Day/`
      );
      setList(res.data.valentine);
      setTotal(res.data.totalPages);
    } catch (err) {
      console.log(err);
    }
  };

  const HandelEditProduct = async (ProductName, productId, ProductPrice) => {
    const data = {
        ProductName, 
        ProductPrice,
        productId
    }
    try {
        return await axios.post(
          `${process.env.REACT_APP_MAIN_SERVER_URL}/valentine_Day/edit`, data);
      } catch (err) {
        console.log(err);
      }
}

// useEffect(() => {
//   GetData()
// }, [page]);

useEffect(() => {
  GetData()
}, [HandelEditProduct]);



  return (
    <Box pt="1rem" pb="2rem" w="90%" m="auto">
      <SimpleGrid h="40rem" overflowY={"scroll"}  columns={[1, 2, 2, 3]} spacing={10} display="grid">
        {list.map((product, i) => {
          return (
           <SinglePage HandelEditProduct={HandelEditProduct} Price={price} setPrice={setPrice} name={name} setName={setName} product={product} i={i} />
          );
        })}
      </SimpleGrid>
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
      </Box>{" "}
    </Box>
  );
};
