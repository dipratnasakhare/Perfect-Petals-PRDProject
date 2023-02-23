import {
  Button,
  Drawer,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  useDisclosure,
  Input,
  DrawerBody,
  Image,
  Text,
  Grid,
  Flex,
  Spacer,
} from "@chakra-ui/react";

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Debouncing = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [SearchText, setSearchText] = useState("");
  const [list, setList] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState(false);
  const firstField = useRef();
  const navigate = useNavigate();

  const HandelAddSinglePage = (data) => {
    localStorage.setItem("SingleProductOfFlowerryShop", JSON.stringify(data));
  };


  useEffect(() => {
    const getData = setTimeout(async () => {
      try {
        setLoading(true);
        let res = await axios.get(
          `${process.env.REACT_APP_MAIN_SERVER_URL}/valentine_Day/Debouncing?search=${SearchText}`
        );
        if (SearchText !== "") {
          setList(res.data.data);
          if (res.data.data.length == 0) {
            setError(true);
          } else {
            setError(false);
          }
          setLoading(false);
        } else {
          setList([]);
        }
      } catch (err) {
        console.log(err);
      }
    }, 1000);

    return () => clearTimeout(getData);
  }, [SearchText]);

  const HandelSearch = () => {
    onOpen();
    setSearchText("");
    setList([]);
  };

  return (
    <Box>
      <Button colorScheme="green" onClick={HandelSearch}>
        Serach
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="top"
        initialFocusRef={firstField}
        onClose={onClose}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Search</DrawerHeader>
          <DrawerBody>
            <Box
              h={SearchText.length !== 0 ? "25rem" : "3rem"}
              w={["90%", "60%"]}
              m="auto"
            >
              <Input
                ref={firstField}
                value={SearchText}
                mb="1rem"
                onChange={(e) => setSearchText(e.target.value)}
              />

              {Error ? (
                <Box>
                  <Image
                    w={["90%", "90%", "100%", "50%"]}
                    m="auto"
                    onClick={() => setSearchText("")}
                    src="https://cdn.dribbble.com/users/898770/screenshots/3744292/search-bar.gif"
                  />
                </Box>
              ) : Loading ? (
                <Image
                  w="50%"
                  m="auto"
                  src="https://www.jimphicdesigns.com/downloads/imgs-mockup/pixelated-hourglass-loading.gif"
                />
              ) : (
                <Grid gap="10px">
                  {list &&
                    list.map((ele) => {
                      return (
                        <Flex
                          display={["grid", "flex"]}
                          key={Math.random()}
                          border="1px solid"
                          borderRadius={"10px"}
                          // justifyContent="space-evenly"
                          p="10px"
                        >
                          <Flex>
                            <Image w={["20%", "10%"]} src={ele.ImgUrl} />
                            <Box
                              display={"grid"}
                              alignContent="center"
                              justifyContent="center"
                              pl="1rem"
                            >
                              <Text fontFamily={"cursive"}>{ele.Name}</Text>
                            </Box>
                          </Flex>
                          <Spacer />
                          <Box
                            display={"grid"}
                            alignContent="center"
                            justifyContent="center"
                          >
                            <Button
                              onClick={() => {
                                HandelAddSinglePage(ele);
                                navigate("/Single_Product_Box");
                                onClose();
                              }}
                              w="5rem"
                            >
                              More
                            </Button>
                          </Box>
                        </Flex>
                      );
                    })}
                </Grid>
              )}
            </Box>
          </DrawerBody>
        </DrawerContent>
        <DrawerFooter>s</DrawerFooter>
      </Drawer>
    </Box>
  );
};
