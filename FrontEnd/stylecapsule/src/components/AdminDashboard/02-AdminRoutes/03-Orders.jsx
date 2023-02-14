import {
  Accordion,
  Box,
  Button,
  Flex,
  Grid,
  Spacer,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { PaginationBox } from "../../page/Valentine/Pagination/PaginationBox";
import { AccordionBox } from "./AcordioanBox/AcordioanBox";

export const Orders = () => {
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);
  const [Loading, setLoading] = useState(false);
  const [List, setList] = useState([]);
  const toast = useToast();
  const OrderDetails = async () => {
    setLoading(true)
    try {
      let x = await axios.get(
        `${process.env.REACT_APP_MAIN_SERVER_URL}/AdminSideRoutes/OrderGet`
      );
      setLoading(false)
      setList(x.data.orderList);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    OrderDetails();
  }, []);

  return (
    <Box
      backgroundSize={"cover"}
      backgroundImage={
        "https://images.pexels.com/photos/7130540/pexels-photo-7130540.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
      pt="1rem"
      pb="8rem"
    >
      <Box>
        {Loading ? (
          <Box display={"grid"} justifyContent="center" alignContent={"center"}>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Box>
        ) : (
          <Box w={["90%", "90%", "60%"]} m="auto">
            <Box gap="25px">
              {List &&
                List.map((ele) => {
                  console.log(ele);
                  return (
                    <Box border={"1px solid"} overflowX="scroll"  p="25px">
                      <Flex>
                        <Text pr="5px"  color="blue">UserId-</Text>
                        <Text>  {ele.UserId}</Text>
                      </Flex>
                      <Flex>
                        <Text pr="5px" color="blue">Total Ammount -</Text>
                        <Text> ${ele.TotalPrice}</Text>
                      </Flex>
                      <Flex>
                        <Text pr="5px" color="blue">Delivart -</Text>
                        <Text>{ele.Status}</Text>
                      </Flex>
                      <Box>
                        <Accordion allowToggle>
                          <AccordionBox List={ele.OrderDetails} />
                        </Accordion>
                      </Box>
                    </Box>
                  );
                })}
            </Box>
          </Box>
        )}
      </Box>

      <PaginationBox page={page} setPage={setPage} total={total} />
    </Box>
  );
};
