import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { CreditCards } from "./Pages/Pages/CreditCards/CreditCards";
import { DebitCards } from "./Pages/Pages/DebitCards/DebitCards";
import { NetBanking } from "./Pages/Pages/NetBanking/NetBanking";
import { Paytm } from "./Pages/Pages/Paytm/Paytm";
import { PaymentText } from "./Pages/PaymentText/PaymentText";

const PaymentOption = ({setOrderPlace}) => {

const [PaymentOfMethod , setPaymentOfMethod] = useState("Paytm")



  return (
    <Box mt="2rem" mb="2rem" >
      <Box >
        <Heading m="15px" justifyContent={"flex-start"} display="flex" as="h3" size="lg">
          Payment options{" "}
        </Heading>
      </Box>
      <Flex  display={["grid","grid","grid", "flex"]} >
        <Box  bg="white"  h="14rem" ><PaymentText setPaymentOfMethod={setPaymentOfMethod} PaymentOfMethod={PaymentOfMethod} /></Box>
        <Box w={["100%" , "35rem"]} p="25px"  bg="white" >
        {PaymentOfMethod === "Paytm" ? <Paytm setOrderPlace={setOrderPlace}/> : ""}
        {PaymentOfMethod === "Credit Cards" ? <CreditCards setOrderPlace={setOrderPlace}/> : ""}
        {PaymentOfMethod === "Debit Cards" ? <DebitCards setOrderPlace={setOrderPlace}/> : ""}
        {PaymentOfMethod === "Net Banking" ? <NetBanking setOrderPlace={setOrderPlace}/> : ""}
        </Box>
      </Flex>
    </Box>
  );
};

export default PaymentOption;
