
import {
  Box,
  Input,
  Text,
  Flex,
  Spacer,
  Button,
  Checkbox,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import style from "./style/CreditCards.module.css";
export const CreditCards = ({ setOrderPlace }) => {
  const [CardNo, setCardNo] = useState("");
  const [Name, setName] = useState("");
  const [Date, setDate] = useState("");
  const [Cvv, setCvv] = useState("");
  const toast = useToast()

  return (
    <Box className={style.mainBox}>
      <Box>
        <Box justifyContent={"flex-start"} display="grid">
          <Text>Credit card number</Text>
        </Box>
        <Box>
          <Input
            bgRepeat={"no-repeat"}
            bgPos="right"
            bgSize={"30px"}
            bgImage={
              "https://th.bing.com/th/id/OIP.9TNqDBKi08Xz_DhwKXnwdQHaHa?pid=ImgDet&rs=1"
            }
            // placeholder="Enter Your Number"
            isInvalid={CardNo === ""}
            onChange={(e) => setCardNo(e.target.value)}
            errorBorderColor="red.300"
            size="sm"
            value={CardNo}
            id="ccn"
            type="number"
            inputmode="numeric"
            pattern="[0-9\s]{13,19}"
            autocomplete="cc-number"
            maxlength="19"
            placeholder="xxxx xxxx xxxx xxxx"
          />
        </Box>
      </Box>

      <Box>
        <Box justifyContent={"flex-start"} display="grid">
          <Text>Credit card name</Text>
        </Box>
        <Box>
          <Input
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            size="sm"
            value={Name}
            isInvalid={Name === ""}
            errorBorderColor="red.300"
          />
        </Box>
      </Box>

      <Flex display={["grid", "grid", "flex"]}>
        <Box>
          <Text mb="15px">Expiry date (MM / YY)</Text>
          <Box>
            <Input
              onChange={(e) => setDate(e.target.value)}
              value={"Date"}
              type="date"
              isInvalid={Date === ""}
              errorBorderColor="red.300"
            />
          </Box>
        </Box>

        <Spacer />
        <Box>
          <Box>
            <Text mb="15px">CVV</Text>
          </Box>
          <Box>
            <Input
              value={Cvv}
              onChange={(e) => setCvv(e.target.value)}
              type="password"
              className={style.inputcvv}
              isInvalid={Cvv === ""}
              errorBorderColor="red.300"
              w="8rem"
              bgRepeat={"no-repeat"}
              bgPos="right"
              bgSize={"30px"}
              bgImage={
                "https://moneymall.ae/credit-blog/wp-content/uploads/2020/09/cvv.png"
              }
            />
          </Box>
        </Box>
      </Flex>

      <Flex>
        {" "}
        <Checkbox
          size="lg"
          ml="8px"
          colorScheme="green"
          mr="8px"
        ></Checkbox>{" "}
        <Text>Save this card for faster checkout</Text>
      </Flex>

      <Box m="30px" justifyContent={"flex-start"} display="grid">
        <Button
           onClick={() => {
            if(CardNo !== "" && Name !== "" && Date !== "" && Cvv !== "" ){
              setOrderPlace(true)
            }else{
              toast({
                position: 'top',
                title: 'Please Fields all Input',
                status: 'error',
                duration: 5000,
                isClosable: true,
              })
            }
          }}
          _hover={"none"}
          borderRadius={"0px"}
          bg="#ef534e"
        >
          Pay Now
        </Button>
      </Box>
    </Box>
  );
};
