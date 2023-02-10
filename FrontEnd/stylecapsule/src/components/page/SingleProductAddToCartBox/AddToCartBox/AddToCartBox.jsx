import React from "react";
import { BsHeart } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { TbListDetails } from "react-icons/tb"
import { Text, Button, Grid } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { Set_Single_Page_data } from "../../../Redux/products/Prodaction";

export const AddToCartBox = ({ data }) => {
  let navigate = useNavigate();
  const toast = useToast();
  // const dispatch = useDispatch();

  const HandelAddSinglePage = (data) => {
    localStorage.setItem("SingleProductOfFlowerryShop", JSON.stringify(data))
  }

  // User_Wishlist_Data

  const HandelAddToCart = async (CartData) => {

    let UserId = JSON.parse(localStorage.getItem("styleCapsuleToken"))
    UserId = UserId.UserId
    let data =  {
      UserId,
      UserCartData: [CartData]
    }
    try {
      let x =  await axios.post('http://localhost:4000/User_Cart_Data/Post', data);
      toast({
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

  const HandelAddToWishList = async (CartData) => {
    let UserId = JSON.parse(localStorage.getItem("styleCapsuleToken"))
    UserId = UserId.UserId
    let data =  {
      UserId,
      UserWishlist: [CartData]
    }
    try {
      let x =  await axios.post('http://localhost:4000/User_Wishlist_Data/Post', data);
      toast({
        title: x.data.msg,
        description: x.data.msg,
        status: x.data.status,
        duration: 9000,
        isClosable: true,
      })
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Grid gap="1" pt="5px">
      <Button
        mb="2"
        borderRadius={"0px"}
        w="100%"
        border={"1px solid black"}
        gap="3"
        onClick={() => HandelAddToWishList(data)}
      >
        <Text textAlign={"start"}>
          <BsHeart color="black" />
        </Text>{" "}
        <Text color="black">WISHLIST</Text>
      </Button>
      <Button
        bg="#35c557"
        _hover={"none"}
        borderRadius={"0px"}
        w="100%"
        border={"1px solid black"}
        gap="3"
        mb="2"
        onClick={()=> HandelAddToCart(data)}
      >
        <Text textAlign={"start"}>
          <BsCart color="black" />
        </Text>{" "}
        <Text color="black">ADD TO CART</Text>
      </Button>

      <Button
        bg="#35c557"
        _hover={"none"}
        borderRadius={"0px"}
        w="100%"
        border={"1px solid black"}
        gap="3"
        onClick={()=>{
          HandelAddSinglePage(data)
          navigate("/Single_Product_Box")
        }}
      >
        <Text textAlign={"start"}>
          <TbListDetails color="black" />
        </Text>{" "}
        <Text color="black">More</Text>
      </Button>
    </Grid>
  );
};

