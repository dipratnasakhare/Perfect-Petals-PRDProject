import React, { useEffect, useState } from "react";
import { BsHeart } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { TbListDetails } from "react-icons/tb"
import { Text, Button, Grid } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { json, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Set_Single_Page_data } from "../../../Redux/products/Prodaction";

var arr = [];
export const AddToCartBox = ({ data }) => {
  let navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();

  const HandelAddSinglePage = (data) => {
    localStorage.setItem("SingleProductOfFlowerryShop", JSON.stringify(data))
  }

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

  const HandelAddToWishList = () => {
    toast({
      title: "Succesfull",
      description: "Product Added In WishList",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
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


{/* <Box p="15px" >
<Button>
<Text>More</Text>
</Button>
</Box> */}