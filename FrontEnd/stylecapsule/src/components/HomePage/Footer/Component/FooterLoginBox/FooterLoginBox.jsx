import {
  Box,
  Text,
  Image,
  Flex,
  Input,
  Heading,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "./FooterLoginBox.module.css";

export default function FooterLoginBox() {
  const [bool, setbool] = useState(true);
  const navigate = useNavigate()

  let social = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/665/665209.png",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/665/665228.png",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/1362/1362857.png",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/665/665213.png",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/665/665232.png",
    },
  ];

  return (
    <Box h="100%" m="auto" w={["90%", "80%", "90%","70%"]} border="1px solid" mt={["5rem", "0px", "0px", "0px"]} >
      <Box className={styled.Login}>
        <Box>
          {" "}
          <Box onClick={()=>navigate("/login")} >
           <Text >Sign in or Create Account</Text>
          </Box>
        </Box>

        <Box>
          <Heading size="md" mb="5">
            Get the latest deals and more.
          </Heading>

          {!bool ? (
            <Box m="auto">
              <Image
                w="20%"
                src="https://cdn-icons-png.flaticon.com/512/2279/2279398.png"
              />
            </Box>
          ) : (
            <Flex display={["grid","grid","grid", "flex"]} >
              <Box mb="10px">
                <Input type="email" placeholder="Enter email address" />
              </Box>

              <Box m="auto">
                <Button
                  _hover="none"
                  bg="blue"
                  color="white"
                  onClick={() => setbool(!bool)}
                >
                  Sign Up
                </Button>
              </Box>
            </Flex>
          )}
          {/* */}
        </Box>

        <Flex >
          <Box w="30%">
            <Image w="100%" src="https://cdn-icons-png.flaticon.com/512/4073/4073501.png" />
          </Box>
          <Spacer />
          <Box w="60%" m="auto">
            <Box>
              <Heading fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                Style Capsule
              </Heading>
            </Box>
            <Box>
              <Text>Learn more</Text>
            </Box>
          </Box>
        </Flex>

        <Box>

          
          <Flex w="95%" m="auto">
            {social.map((ele) => {
              return (
                <Box>
                  <Image w="60%" src={ele.img} />
                </Box>
              );
            })}
          </Flex>
        </Box>

        <Box ml={1}>
          <Text>Forums, blogs & more</Text>
        </Box>
      </Box>
    </Box>
  );
}
