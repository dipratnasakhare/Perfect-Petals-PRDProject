import React, { useEffect, useState } from "react";
import { BsHeart } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { Text, Button, Grid } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

var arr = [];
export const AddToCartBox = ({ data }) => {
  let navigate = useNavigate();
  const toast = useToast();

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
        bg="#F167AE"
        _hover={"none"}
        borderRadius={"0px"}
        w="100%"
        border={"1px solid black"}
        gap="3"
        mb="2"
      >
        <Text textAlign={"start"}>
          <BsCart color="black" />
        </Text>{" "}
        <Text color="black">ADD TO CART</Text>
      </Button>

      <Button
        // bg="#F167AE"
        backgroundImage={"https://images.pexels.com/photos/6985003/pexels-photo-6985003.jpeg?cs=srgb&dl=pexels-gradienta-6985003.jpg&fm=jpg&_gl=1*b19tv2*_ga*MTM4ODE0NzQ5OS4xNjc1MTY0ODc3*_ga_8JE65Q40S6*MTY3NTU5NTY4Mi4zLjEuMTY3NTU5ODQ4NS4wLjAuMA.."}
        _hover={"none"}
        borderRadius={"0px"}
        w="100%"
        border={"1px solid black"}
        gap="3"
      >
        <Text textAlign={"start"}>
          <BsCart color="black" />
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