import {
  Box,
  Heading,
  Image,
  useToast,
  Button,
  Text,
  Flex,
  Spacer,
  Grid,
  SimpleGrid,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsCart } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import { PaginationBox } from "../Valentine/Pagination/PaginationBox";

export const WishlistPage = () => {
  const [List, setList] = useState(true);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [WishlistData, setWishlistData] = useState([]);
  const toast = useToast();

  const GetWishlistData = async () => {
    let UserId = JSON.parse(localStorage.getItem("styleCapsuleToken"));
    UserId = UserId.UserId;
    let data = {
      UserId,
    };
    try {
      let x = await axios.post(
        `${process.env.REACT_APP_MAIN_SERVER_URL}/User_Wishlist_Data/?page=${page}&limit=8`,
        data
      );

      if (x.data.msg == "Please add product in cart") {
        toast({
          position: "top",
          title: x.data.msg,
          description: x.data.msg,
          status: x.data.status,
          duration: 9000,
          isClosable: true,
        });

        // navigation("/");
      } else {
        console.log(x);
        setWishlistData(x.data.User_Arr);
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
        `${process.env.REACT_APP_MAIN_SERVER_URL}/User_Wishlist_Data/delete`,
        data
      );
      toast({
        position: "top",
        title: x.data.msg,
        description: x.data.msg,
        status: x.data.status,
        duration: 9000,
        isClosable: true,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    GetWishlistData();
  }, [HandelDelte]);


  const HandelAddToCart = async (CartData) => {
    let UserId = JSON.parse(localStorage.getItem("styleCapsuleToken"));
    UserId = UserId.UserId;
    let data = {
      UserId,
      UserCartData: [CartData],
    };
    try {
      let x = await axios.post(
        "http://localhost:4000/User_Cart_Data/Post",
        data
      );
      toast({
        position: "top",
        title: x.data.msg,
        description: x.data.msg,
        status: x.data.status,
        duration: 9000,
        isClosable: true,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box
      pt="2rem"
      pb="3rem"
      backgroundRepeat={"none"}
      backgroundSize="cover"
      backgroundImage={
        "https://images.pexels.com/photos/7130545/pexels-photo-7130545.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
    >
      <Grid  gap="25px">
        <Box w="30%" m="auto">
          <Image
            m="auto"
            w="10"
            src="https://cdn-icons-png.flaticon.com/512/520/520428.png"
          />

          <Box>
            <Heading textAlign={"center"}>my wishlist</Heading>
          </Box>
        </Box>
        <SimpleGrid  columns={{base:1, md:2, lg:1}} spacing={10}  w="70%" m="auto" >
          {WishlistData &&
            WishlistData.map((ele) => {
              return (
                <Flex
                  display={{ base: "grid",md:"grid" , lg: "flex" }}
                  gap={{ base: "6px", md: "8px", lg:"25px" }}
                  p="25"
                  border={"1px solid"}
                  alignItems="center"
                >
                  <Box
                    w={{ base: "60%", md: "65%", lg:"10%" }}
                    m={{ base: "auto", md: "auto", lg:"0px" }}
                  >
                    <Image src={ele.ImgUrl} />
                  </Box>

                  <Box>
                    <Text>{ele.Name}</Text>
                  </Box>

                  <Box>
                    <Text>{ele.Price}</Text>
                  </Box>

                  <Spacer />

                  <Box>
                    <Button
                      bg="#35c557"
                      _hover={"none"}
                      borderRadius={"0px"}
                      w="100%"
                      border={"1px solid black"}
                      gap="3"
                      mb="2"
                      onClick={() => HandelAddToCart(ele)}
                    >
                      <Text textAlign={"start"}>
                        <BsCart color="black" />
                      </Text>{" "}
                      <Text color="black">ADD TO CART</Text>
                    </Button>{" "}
                  </Box>

                  <Box>
                    <Button
                      bg="#35c557"
                      _hover={"none"}
                      borderRadius={"0px"}
                      w="100%"
                      border={"1px solid black"}
                      gap="3"
                      mb="2"
                      onClick={() => HandelDelte(ele["_id"])}
                    >
                      <Text textAlign={"start"}>
                        <MdDeleteOutline size="1.5rem" color="black" />
                      </Text>{" "}
                      <Text color="black">Delete</Text>
                    </Button>{" "}
                  </Box>
                </Flex>
              );
            })}
        </SimpleGrid >
      </Grid>

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
    </Box>
  );
};
