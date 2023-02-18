import {
  Button,
  Drawer,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Image,
  Text,
  Grid,
  Flex,
  useDisclosure,
  Input,
  Select,
  FormLabel,
  DrawerBody,
  Stack,
  InputGroup,
  InputLeftAddon,
  Textarea,
  InputRightAddon,
  useToast,
} from "@chakra-ui/react";
import { BiEdit } from "react-icons/bi";
import { BsStar } from "react-icons/bs";
import React, { useRef, useState } from "react";
import axios from "axios";

export const DrawerAddProduct = ({GetData}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();
  const toast = useToast()

  const [ProductImg, setProductImg] = useState(
    "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/192247mpcv4n5ch28x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}"
  );
  const [ProductPrice, setProductPrice] = useState("$74.99 - $168.99");
  const [ProductName, setProductName] = useState(
    "Sparkle Her Day Two Dozen Red Roses"
  );
  const [ProductRating, setProductRating] = useState(0);
  const [ProductBought, setProductBought] = useState(0);

  const [ProductBoolName, setProductBoolName] = useState(true);
  const [ProductBoolPrice, setProductBoolPrice] = useState(true);
  const [ProductBoolImg, setProductBoolImg] = useState(true);



  const HandelAddProduct = async () => {
    onClose()
    const data = {
      ImgUrl: ProductImg,
      Name: ProductName,
      Price: ProductPrice,
    };
    try {
      let x =  await axios.post(
        `${process.env.REACT_APP_MAIN_SERVER_URL}/valentine_Day/AddProduct`, data
      );
      toast({
        position: "top",
        description: x.data.msg,
        status: x.data.status,
        duration: 2000,
        isClosable: true,
      });
      GetData()
    } catch (err) {
      console.log(err);
    }
  };

 

  return (
    <>
      <Button colorScheme="green" onClick={onOpen}>
        Add Product
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Create a new account
          </DrawerHeader>

          <DrawerBody>
            <Stack >
              <Grid gap="5px">
              {ProductBoolImg ? (
                  <Box>
                    <Image src={ProductImg} />
                  </Box>
                ) : (
                  <Input
                    value={ProductImg}
                    onChange={(e) => setProductImg(e.target.value)}
                  />
                )}
                <Box onClick={() => setProductBoolImg(!ProductBoolImg)}>
                  <BiEdit />
                </Box>
                
                {ProductBoolName ? (
                  <Text>{ProductName}</Text>
                ) : (
                  <Input
                    ref={firstField}
                    value={ProductName}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                )}
                <Box onClick={() => setProductBoolName(!ProductBoolName)}>
                  <BiEdit />
                </Box>
                <Text color="black">
                  {" "}
                  <Flex gap="3">
                    <Text fontFamily={"cursive"}>Rating</Text>
                    <Flex gap="1.5" w="25px" mt="3px">
                      {Array(5)
                        .fill(0)
                        .map((ele, i) =>
                          i < ProductRating ? (
                            <Box>
                              <BsStar fontSize={"1.2rem"} color="gold" />
                            </Box>
                          ) : (
                            <Box>
                              <BsStar fontSize={"1.2rem"} color="green" />
                            </Box>
                          )
                        )}
                    </Flex>
                  </Flex>
                </Text>

                <Text fontFamily={"cursive"} color="black">Bought {ProductBought}</Text>
                {ProductBoolPrice ? (
                  <Text as="b" color="black">
                    {ProductPrice}
                  </Text>
                ) : (
                  <Input
                    ref={firstField}
                    value={ProductPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                  />
                )}
                <Box onClick={() => setProductBoolPrice(!ProductBoolPrice)}>
                  <BiEdit />
                </Box>
              </Grid>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="0.2px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={HandelAddProduct} colorScheme="blue">Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
