import {
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  Image,
  Radio,
  RadioGroup,
  Spacer,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";

import { FcDepartment } from "react-icons/fc";
// import { CiPassport1 } from "react-icons/ci";
import { BsCart } from "react-icons/bs";

// import { useSelector } from "react-redux";
import axios from "axios";

export const SingleProductBox = () => {
  const [data, setData] = useState("");
  const [value, setValue] = useState("4");
  const [price, setPrice] = useState(0);

  const toast = useToast()
  // const data = useSelector((state) => state.prodManager.data);

  useEffect(() => {
    let Data =
      JSON.parse(localStorage.getItem("SingleProductOfFlowerryShop")) || "null";

    console.log(Data);
    if (Data !== "null") {
      setData(Data);
      let price = Data.Price.trim().split("-");
      let x = price[0].trim().split("$");
      x = +x[1];
      setPrice(x);
    }
  }, []);


  const HandelAddToCart = async (CartData) => {


    let UserId = JSON.parse(localStorage.getItem("styleCapsuleToken"))
    UserId = UserId.UserId
    let data =  {
      UserId,
      UserCartData: [CartData]
    }

    console.log(UserId, "aaaaaaaaaa")

    try {
      let x =  await axios.post(`${process.env.REACT_APP_MAIN_SERVER_URL}/User_Cart_Data/Post`, data);
      toast({
        position: "top",
        title: x.data.msg,
        description: x.data.msg,
        status: x.data.status,
        duration: 9000,
        isClosable: true,
      })
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <Box w="80%" m="auto" mt="2rem" mb="2rem">
      {data && (
        <>
          <Flex display={["grid","grid","grid", "flex"]}   m="auto"  gap="35px">
            <Grid
              w={["20%", "20%", "20%", "10%"]}
              display={["none","none","none", "grid"]}
              gap="10px"
              h="0px"
            >
              {data.ImgUrlList.map((items, index) => {
                return (
                  <Box>
                    <Image src={items} />
                  </Box>
                );
              })}
            </Grid>

            <Box m="auto" bg="pink">
              <Image src={data.ImgUrl} />
            </Box>

            <Box className="single_Product_BoxShadow_App_Css" m="auto" gap="25px"  display="grid" p="10px" w={["100%","100%","70%", "40%"]}>
              {/* Product Name Box  */}
              <Box>
                <Text>{data.Name}</Text>
              </Box>
              {/* Catogery Box here  */}
              <Box>
                <Box p="10px" bg="gray.300">
                  <Text>1. Pick Your Items</Text>
                </Box>

                <Box>
                  <RadioGroup onChange={setValue} value={value}>
                    <Stack>
                      <Flex>
                        <Radio value="1">
                          <Text> Extra Large </Text>
                        </Radio>
                        <Spacer />
                        <Text>$ {Math.floor(price + 30)}</Text>
                      </Flex>
                      <Flex>
                        <Radio value="2">
                          <Text> Large </Text>
                        </Radio>
                        <Spacer />
                        <Text>$ {Math.floor(price + 20)}</Text>
                      </Flex>{" "}
                      <Flex>
                        <Radio value="3">
                          <Text> Medium </Text>
                        </Radio>
                        <Spacer />
                        <Text>$ {Math.floor(price + 10)}</Text>
                      </Flex>
                      <Flex>
                        <Radio value="4">
                          <Text> Small </Text>
                        </Radio>
                        <Spacer />
                        <Text>$ {price}</Text>
                      </Flex>{" "}
                    </Stack>
                  </RadioGroup>
                </Box>
              </Box>

              <Flex gap="8px">
                <Box>
                  <FcDepartment fontSize={"1.5rem"} />
                </Box>
                <Flex gap="10px">
                  <Text>4 interest free payments of $19.00</Text>{" "}
                  <Text color={"green"} textDecoration={"underline"}>Learn More</Text>
                </Flex>
              </Flex>

              <Box>
                <Checkbox isInvalid>
                  <Text>Start a subscription & save 15% Off</Text>
                </Checkbox>
              </Box>

              <Box>
              <Checkbox isInvalid>

                <Text>
                  passport icon Free Shipping/No Service Charge for One Full
                  Year for Only $29.99/Year.
                </Text>
                </Checkbox>

              </Box>

              <Box gap="15px" display={"grid"}>
                <Box p="10px" display={"flex"} bg="gray.300">
                  <Box>
                    {" "}
                    <Text>2 Enter Dilivery Destination</Text>
                  </Box>{" "}
                  <Spacer />
                  <Box>
                    {" "}
                    <Text>Sign in to access your address book</Text>
                  </Box>{" "}
                </Box>

                <Button
                  bg="#35c557"
                  _hover={"none"}
                  borderRadius={"0px"}
                  w="100%"
                  gap="3"
                  mb="2"
                  onClick={()=>HandelAddToCart(data)}
                >
                  <Text textAlign={"start"}>
                    <BsCart color="black" />
                  </Text>{" "}
                  <Text color="black">ADD TO CART</Text>
                </Button>
              </Box>

              <Flex>

                <Text>Designed & Delivered by a Local Shop - </Text>
                <Text textDecoration={"underline"} color={"green"}>Learn more</Text>
              </Flex>
            </Box>
          </Flex>
        </>
      )}
    </Box>
  );
};
