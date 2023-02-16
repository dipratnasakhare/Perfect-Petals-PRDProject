import {
  Flex,
  Box,
  Text,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Image,
  useToast,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpImageText = [
  {
    img: "https://cdn-icons-png.flaticon.com/512/2604/2604653.png",
    text: "Sign In with WebAuthn",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/15/15476.png",
    text: "Sign In with WebAuthn",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/2504/2504739.png",
    text: "Sign In with Goole",
  },
];

export const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  const [serverLoading, SetServerLoading] = useState(false);
  const navigate = useNavigate();
  const [data, setdata] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    mobile_no: "",
    user_type: "Client",
  });

  const HandelFormChange = (e) => {
    let { name, value } = e.target;
    setdata({
      ...data,
      [name]: value,
    });
  };

  const handleSignup = async () => {
    try {
      SetServerLoading(true);
      let x = await axios.post(
        `${process.env.REACT_APP_MAIN_SERVER_URL}/user/register`,
        data
      );
      SetServerLoading(false);
      toast({
        position: "top",
        description: x.data.msg,
        status: x.data.status,
        duration: 2000,
        isClosable: true,
      });
    } catch (err) {
      console.log(err);
      SetServerLoading(false);
      toast({
        position: "top",
        title: "Something is wrong please try later",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Flex
        justify={"center"}
        // m="auto"
        backgroundSize={"cover"}
        backgroundRepeat={"none"}
        backgroundImage={
          "https://images.pexels.com/photos/7130473/pexels-photo-7130473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      >
        <Stack
          borderRadius="3%"
          spacing={4}
          w={["85%", "65%", "60%", "30%"]}
          // maxW={"sm"}
          m="auto"
          bg={"white"}
          boxShadow={"lg"}
          mt="1rem"
          mb="3rem"
        >
          <Flex p={6} flexDirection="column" gap={5}>
            <Stack>
              <Stack textAlign={"center"}>
                <Text
                  mb="10px"
                  fontSize="2xl"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  Sign Up to Style Capsule
                </Text>
              </Stack>
              <Box>
                <Stack>
                  <HStack>
                    <Box>
                      <FormLabel>
                        <Text>First Name</Text>
                      </FormLabel>
                      <Input
                        name="first_name"
                        onChange={(e) => HandelFormChange(e)}
                        type="text"
                        value={data.first_name}
                      />
                    </Box>
                    <Box>
                      <FormLabel>
                        <Text>Last Name</Text>
                      </FormLabel>
                      <Input
                        name="last_name"
                        onChange={(e) => HandelFormChange(e)}
                        type="text"
                        value={data.last_name}
                      />
                    </Box>
                  </HStack>
                  <FormLabel>
                    <Text>Phone Number</Text>
                  </FormLabel>
                  <Input
                    name="mobile_no"
                    onChange={(e) => HandelFormChange(e)}
                    type="number"
                    value={data.mobile_no}
                  />
                  <FormLabel>
                    <Text>Email address</Text>
                  </FormLabel>
                  <Input
                    name="email"
                    onChange={(e) => HandelFormChange(e)}
                    type="Email"
                    value={data.email}
                  />
                  <FormLabel>
                    <Text>Password</Text>
                  </FormLabel>
                  <InputGroup>
                    <Input
                      name="password"
                      onChange={(e) => HandelFormChange(e)}
                      type={showPassword ? "text" : "Password"}
                      value={data.password}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>

                  <Stack spacing={10} pt={2}>
                    <Button
                      isLoading={serverLoading}
                      loadingText="Submitting"
                      size="lg"
                      bg={"blue.500"}
                      color={"white"}
                      onClick={handleSignup}
                      _hover="none"
                    >
                      <Text>Sign up</Text>
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Stack>

            <Flex>
              {SignUpImageText.map(({ img, text }) => {
                return (
                  <Box>
                    <Box>
                      {" "}
                      <Image m="auto" w="50%" src={img} />
                    </Box>
                    <Box textAlign={"center"}>
                      <Text> {text}</Text>
                    </Box>
                  </Box>
                );
              })}
            </Flex>

            <Flex gap="5">
              <Text color="gray.500">Have Trouble logging in ? </Text>
              <Text style={{ color: "red" }}>Get help</Text>
            </Flex>
            <Flex gap="5">
              <Box alignContent={"center"} display="grid">
                {" "}
                <Text color="gray.500">Already a User ? </Text>
              </Box>
              <Box>
                <Button onClick={() => navigate("/login")} colour="blue">
                  <Text>Login</Text>
                </Button>
              </Box>
            </Flex>
          </Flex>
        </Stack>
      </Flex>
    </>
  );
};
