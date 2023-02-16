import { Box, Text, Image, Button, useToast } from "@chakra-ui/react";
import React from "react";

export const Paytm = ({setOrderPlace, SetOrderDetails, CartData}) => {

  const toast = useToast()

  const HandelChecout = () => {
    if (CartData.length === 0) {
      toast({
        position: "top",
        description: "Please add product in cart",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    console.log("maa di chut")
    setOrderPlace(true);
    SetOrderDetails();
  };
  return (
    <Box>
      <Box m="10px" justifyContent={"flex-start"} display='grid'>
        <Text>Select a Wallet</Text>
      </Box>
      <Box m="25px">
        <Image w="25rem" src="https://techstory.in/wp-content/uploads/2021/07/Paytm-in-talks-to-raise-268Mn-in-pre-IPO-funding-round.jpg" />
      </Box>

      <Box m="30px" justifyContent={"flex-start"} display="grid">
        <Button onClick={()=>HandelChecout()} _hover={"none"} borderRadius={"0px"} bg="#ef534e">
          Pay Now
        </Button>
      </Box>
    </Box>
  );
};
