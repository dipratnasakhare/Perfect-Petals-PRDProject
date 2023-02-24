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
  useDisclosure,
  Grid,
  Flex,
  DrawerBody,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { BiEdit } from "react-icons/bi";
import { BsStar } from "react-icons/bs";
import { SetEditProduct } from "../../../../Redux/Admin/AdminAction";

import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export const DrawerEditProduct = ({ productEdit, GetData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();
  const { EditProduct } = useSelector((store) => store.AdminManager);
  const disptach = useDispatch();

  console.log(EditProduct, "edit ");
  const [ProductRating, setProductRating] = useState(0);
  const [ProductBought, setProductBought] = useState(0);

  const [ProductImg, setProductImg] = useState(productEdit.ImgUrl);
  const [ProductName, setProductName] = useState(productEdit.Name);
  const [ProductPrice, setProductPrice] = useState(productEdit.Price);

  const [ProductBoolName, setProductBoolName] = useState(true);
  const [ProductBoolPrice, setProductBoolPrice] = useState(true);
  const [ProductBoolImg, setProductBoolImg] = useState(true);

  const toast = useToast()

  const HandelEditProduct = async () => {
    onClose()
    const data = {
      ProductImg,
      productId: EditProduct["_id"],
      ProductName,
      ProductPrice,
    };
    try {
      let x =  await axios.patch(
        `${process.env.REACT_APP_MAIN_SERVER_URL}/flower-data/edit`, data
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


  const handelDeleteProduct = async () => {
    onClose()
    const data = {
      ProductId: productEdit["_id"]
    };
    try {
      let x =  await axios.post(
        `${process.env.REACT_APP_MAIN_SERVER_URL}/flower-data/delete`, data
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
  }


  return (
    <>
      <Button
        colorScheme="green"
        onClick={() => {
          disptach(SetEditProduct(productEdit));
          onOpen();
        }}
      >
        Edit Product
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
            Edit Product
          </DrawerHeader>

          <DrawerBody>
            <Stack>
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

                <Text fontFamily={"cursive"} color="black">
                  Bought {ProductBought}
                </Text>
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
            <Button mr={3} colorScheme="blue" onClick={HandelEditProduct}>Submit</Button>
            <Button colorScheme="blue" onClick={handelDeleteProduct}>Delete</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
