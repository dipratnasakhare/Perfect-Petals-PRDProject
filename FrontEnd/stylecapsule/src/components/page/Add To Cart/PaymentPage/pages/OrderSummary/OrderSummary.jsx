import {
  Box,
  Divider,
  Flex,
  Spacer,
  Text,
  Heading,
  Image,
  Button,
  useToast,
  Grid,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const OrderSummary = ({setOrderTotal}) => {
  const toast = useToast();
  // const navigation = useNavigate();
  const [List, setList] = useState(true);
  const [Total, setTotal] = useState(0);
  const [CartData, setCartData] = useState([]);

  const GetCartData = async () => {
    let UserId = JSON.parse(localStorage.getItem("styleCapsuleToken"));
    UserId = UserId.UserId;
    let data = {
      UserId,
    };
    try {
      let x = await axios.post(`${process.env.REACT_APP_MAIN_SERVER_URL}/User_Cart_Data/`, data);

      console.log(x)
      if (x.data.msg == "Please add product in cart") {
        toast({
          position:"top",
          description: x.data.msg,
          status: x.data.status,
          duration: 2000,
          isClosable: true,
        });
        return
        // navigation("/");
      } else {
        setCartData(x.data.User_Arr);
        return 
      }
    } catch (err) {
      console.log(err);
    }
  };

  const HandelDelte = async (id) => {
    let UserId = JSON.parse(localStorage.getItem("styleCapsuleToken"));
    UserId = UserId.UserId;
    let data = {
      UserId,
      id,
    };

    try {
      let x = await axios.post(
        `${process.env.REACT_APP_MAIN_SERVER_URL}/User_Cart_Data/delete`,
        data
      );
      toast({
        position:"top",
        description: x.data.msg,
        status: x.data.status,
        duration: 2000,
        isClosable: true,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    GetCartData();
  }, [HandelDelte]);

  useEffect(() => {
    if (CartData.length !== 0) {
      let total = 0;
      CartData.map((ele) => {
        let price = ele.Price.trim().split("-");
        let x = price[0].trim().split("$");
        x = +x[1];
        total += x;
      });
      setTotal(Math.floor(total));
      setOrderTotal(Math.floor(total) + 20)
    } 
  }, [HandelDelte]);

  return (
    <>
      {CartData && (
        <Box>
          <Box
            h={List ? "12rem" : "auto"}
            overflow={"hidden"}
            m="1rem"
            p="1rem"
            bg="white"
            borderRadius={"3px"}
          >
            <Box>
              <Heading
                justifyContent={"flex-start"}
                display="flex"
                as="h3"
                size="lg"
              >
                Order summary
              </Heading>
            </Box>
            <Divider mb="8px" />
            <Divider mb="8px" />

            <Grid gap="20px" mt="1rem">
              {CartData &&
                CartData.map((ele) => {
                  return (
                    <Box>
                      <Flex gap="30px">
                        <Box>
                          <Image w="20" src={ele.ImgUrl} />
                        </Box>
                        <Grid gap="5px">
                          <Text>{ele.Name}</Text>
                          <Text>{ele.Price}</Text>
                          <Button
                            onClick={() => HandelDelte(ele["_id"])}
                            w="20"
                          >
                            <Text>Delete</Text>
                          </Button>
                        </Grid>
                      </Flex>
                    </Box>
                  );
                })}
            </Grid>
          </Box>

          <Box justifyContent="center" display={"grid"}>
            <Button onClick={() => setList(!List)}>{List ? "↓" : "↑"}</Button>
          </Box>
          <Grid gap="5px" m="1rem" p="1rem" bg="white" borderRadius={"3px"}>
            <Flex>
              <Box>
                <Text>Convenience Fees</Text>
              </Box>
              <Spacer />
              <Box>$ 20</Box>
            </Flex>

            <Divider mb="8px" />

            <Flex>
              <Box>
                <Text>Subtotal (Qty. {CartData.length})</Text>
              </Box>
              <Spacer />
              <Box>$ {Total}</Box>
            </Flex>

            <Divider mb="8px" />

            <Box justifyContent={"flex-start"} display="grid">
              <Text color="red">View & Apply promo code</Text>
            </Box>

            <Divider mb="8px" />

            <Flex>
              <Box>
                <Text>Total</Text>
              </Box>
              <Spacer />
              <Box>
                <Text color="blue.500"> ${Total + 20}</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default OrderSummary;
