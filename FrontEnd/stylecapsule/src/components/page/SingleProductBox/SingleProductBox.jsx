import {
  Accordion,
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  Image,
  Input,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Radio,
  RadioGroup,
  Select,
  Spacer,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { BsStar } from "react-icons/bs";

import { FcDepartment } from "react-icons/fc";
// import { CiPassport1 } from "react-icons/ci";
import { BsCart } from "react-icons/bs";

// import { useSelector } from "react-redux";
import axios from "axios";

export const SingleProductBox = () => {
  const [ProductData, setProductData] = useState("");
  const [value, setValue] = useState("4");
  const [price, setPrice] = useState(0);
  const [buttonText, setButtonText] = useState("Comment");
  const [commentText, setCommentText] = useState("");
  const [ProductRating, setProductRating] = useState(5);

  const toast = useToast();
  // const data = useSelector((state) => state.prodManager.data);

  const HandelCommentBox = async (ProductId) => {

    let dataUser = JSON.parse(localStorage.getItem("styleCapsuleToken"));
    const UserId = dataUser.UserId;
    const user = dataUser.name;

    const data1 = {
      UserId,
      ProductId,
      commentText,
      ProductRating
    };

    if (buttonText == "Update") {
      try {
        let x = await axios.post(
          `${process.env.REACT_APP_MAIN_SERVER_URL}/valentine_Day/edit-contmme`,
          data1
        );
        toast({
          position: "top",
          description: x.data.msg,
          status: x.data.status,
          duration: 2000,
          isClosable: true,
        });
      } catch (err) {
        console.log(err);
      }
      getDataForSingleProduct()
      setButtonText("Comment");
      return 
    }
      
    
     // checking here user have added comment before 
    let x = ProductData.Comment.filter((ele)=>ele.UserId == UserId)
    if(x.length >= 1){
      toast({
        position: "top",
        description: "You already added comment",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      setCommentText(x[0].comment)
      setButtonText("Update")
      return
    }

// posting comment text to backend 
    const data = {
      UserId,
      ProductId,
      user,
      comment: commentText,
      Rating: ProductRating,
      Like: 0,
    };

    if (buttonText == "Submit") {
      try {
        let x = await axios.post(
          `${process.env.REACT_APP_MAIN_SERVER_URL}/valentine_Day/comment`,
          data
        );

        toast({
          position: "top",
          description: x.data.msg,
          status: x.data.status,
          duration: 2000,
          isClosable: true,
        });
      } catch (err) {
        console.log(err);
      }
      getDataForSingleProduct()

    }
    setButtonText("Submit")
   
  };





  const getDataForSingleProduct = async () => {
    // geting id from from localstorage
    let ProductData = JSON.parse(localStorage.getItem("SingleProductOfFlowerryShop")) || "null";
     const data = {ProductId: ProductData["_id"]}

    try {
      let x = await axios.post(
        `${process.env.REACT_APP_MAIN_SERVER_URL}/valentine_Day/single-product`,
        data
      );
      setProductData(x.data.data)
      if(x.data.data === undefined){
        setProductData(ProductData)
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getDataForSingleProduct()
  }, []);
 



  const HandelAddToCart = async (CartData) => {
    let UserId = JSON.parse(localStorage.getItem("styleCapsuleToken"));
    UserId = UserId.UserId;
    CartData.Date = Date()
    let data = {
      UserId,
      UserCartData: [CartData],
    };

    try {
      let x = await axios.post(
        `${process.env.REACT_APP_MAIN_SERVER_URL}/User_Cart_Data/Post`,
        data
      );
      toast({
        position: "top",
        description: x.data.msg,
        status: x.data.status,
        duration: 2000,
        isClosable: true,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    <Box w="80%" m="auto" mt="2rem" mb="2rem">
      {ProductData && (
        <>
          <Flex display={["grid", "grid", "grid", "flex"]} m="auto" gap="35px">
            <Grid
              w={["20%", "20%", "20%", "10%"]}
              display={["none", "none", "none", "grid"]}
              gap="10px"
              h="0px"
            >
              {ProductData.ImgUrlList.map((items, index) => {
                return (
                  <Box>
                    <Image src={items} />
                  </Box>
                );
              })}
            </Grid>

            <Box m="auto" bg="pink">
              <Image src={ProductData.ImgUrl} />
            </Box>

            <Box
              className="single_Product_BoxShadow_App_Css"
              m="auto"
              gap="25px"
              display="grid"
              p="10px"
              w={["100%", "100%", "70%", "40%"]}
            >
              {/* Product Name Box  */}
              <Box>
                <Text>{ProductData.Name}</Text>
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
                  <Text color={"green"} textDecoration={"underline"}>
                    Learn More
                  </Text>
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
                  onClick={() => HandelAddToCart(ProductData)}
                >
                  <Text textAlign={"start"}>
                    <BsCart color="black" />
                  </Text>{" "}
                  <Text color="black">ADD TO CART</Text>
                </Button>
              </Box>

              <Flex>
                <Text>Designed & Delivered by a Local Shop - </Text>
                <Text textDecoration={"underline"} color={"green"}>
                  Learn more
                </Text>
              </Flex>

              <Grid gap="10px">
                {buttonText !== "Comment" ? (
                  <>
                    <Input
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      // placeholder="Enter you Expreence with product"
                    />
                    <Select onChange={(e) => setProductRating(e.target.value)}>
                      <option value={5}>5</option>
                      <option value={4}>4</option>
                      <option value={3}>3</option>
                      <option value={2}>2</option>
                      <option value={1}>1</option>
                    </Select>
                  </>
                ) : (
                  ""
                )}
                <Button onClick={() => HandelCommentBox(ProductData["_id"])}>
                  {buttonText}
                </Button>
              </Grid>
            </Box>
          </Flex>
        </>
      )}

   
    </Box>

{ProductData.Comment !== undefined &&   <Box>
  <Accordion allowToggle>
    <Box borderTop="1px solid">
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <h1>Comments</h1>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {ProductData &&
            ProductData.Comment.map((ele) => {
              return (
                <Box m="10px" border="1px solid blue" p="5px">
                  <Box>
                    <Text>{ele.user}</Text>
                  </Box>
                  <Box>
                    <Text color="black">
                      {" "}
                      <Flex gap="3">
                        <Flex gap="1.5" w="25px" mt="3px">
                          {Array(5)
                            .fill(0)
                            .map((k, i) =>
                              i < ele.Rating ? (
                                <Box>
                                  <BsStar
                                    fontSize={"1.2rem"}
                                    color="gold"
                                  />
                                </Box>
                              ) : (
                                <Box>
                                  <BsStar
                                    fontSize={"1.2rem"}
                                    color="green"
                                  />
                                </Box>
                              )
                            )}
                        </Flex>
                      </Flex>
                    </Text>
                  </Box>

                  <Text>{ele.comment}</Text>
                </Box>
              );
            })}
        </AccordionPanel>
      </AccordionItem>
    </Box>
  </Accordion>
</Box>}
</>
  );
};
