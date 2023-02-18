import {
  Flex,
  Box,
  FormLabel,
  Input,
  InputGroup,
  Image,
  InputRightElement,
  Stack,
  Button,
  Text,
  useToast,
  HStack,
  PinInputField,
  PinInput,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ForgotPasswordPage = () => {
  const toast = useToast();
  const [serverLoading, SetServerLoading] = useState(false);
  const navigate = useNavigate();
  const [sendOtp, SetSendOtp] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordBox, setPasswordBox] = useState(true);

  const [showPassword, setShowPassword] = useState(false);

  const SignInImageText = [
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

  const HandelLoginButton = async () => {

    if (otpValue == 1234) {
      console.log(otpValue, email);
      setPasswordBox(false);

      if (newPassword !== "") {
        let data = { email, password: newPassword };
        try {
          let x = await axios.patch(
            `${process.env.REACT_APP_MAIN_SERVER_URL}/user/setpass`,
            data
          );
          console.log(x);
          toast({
            position: "top",
            description: x.data.msg,
            status: x.data.status,
            duration: 9000,
            isClosable: true,
          });

          navigate("/login");
        } catch (err) {
          console.log(err);
          toast({
            title: "Something is wrong please try later",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      }
      return;
    }

    const data = { email };
    console.log(data);
    try {
      SetServerLoading(true);
      let x = await axios.post("http://localhost:4000/user/changepass", data);
      if (x.data.userPresent) {
        SetSendOtp(true);
        SetServerLoading(false);
        return;
      }
      SetServerLoading(false);
      toast({
        title: x.data.msg,
        description: x.data.msg,
        status: x.data.status,
        duration: 9000,
        isClosable: true,
      });
    } catch (err) {
      console.log(err);
      SetServerLoading(false);
      toast({
        title: "Something is wrong please try later",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Flex
        // align={"center"}
        justify={"center"}
        m="auto"
        backgroundSize={"cover"}
        backgroundRepeat={"none"}
        backgroundImage={
          "https://images.pexels.com/photos/7130473/pexels-photo-7130473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      >
        <Stack
          borderRadius="3%"
          spacing={4}
          w={["85%", "65%", "55%", "30%"]}
          m="auto"
          bg={"white"}
          boxShadow={"lg"}
          mt="1rem"
          mb="3rem"
        >
          <Flex p={6} flexDirection="column" gap={5}>
            <Stack>
              <Stack align={"center"}>
                <Text
                  mb="15px"
                  fontSize="2xl"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  Change Password of Login
                </Text>
              </Stack>
              <Box>
                <Stack>
                  {passwordBox ? (
                    !sendOtp ? (
                      <>
                        <FormLabel>
                          <Text>Email address</Text>
                        </FormLabel>
                        <Input
                          type="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </>
                    ) : (
                      <>
                        <FormLabel>
                          <Text>Enter OTP</Text>
                        </FormLabel>
                        <HStack>
                          <PinInput
                            onChange={(e) => setOtpValue(e)}
                            type="alphanumeric"
                          >
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                          </PinInput>
                        </HStack>
                      </>
                    )
                  ) : (
                    <>
                      <FormLabel>
                        <Text>Enter new Password</Text>
                      </FormLabel>
                      <InputGroup>
                        <Input
                          type={showPassword ? "text" : "Password"}
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
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
                    </>
                  )}

                  <Stack spacing={10} pt={2}>
                    <Button
                      isLoading={serverLoading}
                      loadingText="Submitting"
                      size="lg"
                      bg={"blue.500"}
                      _hover="none"
                      color={"white"}
                      onClick={HandelLoginButton}
                    >
                      <Text>Login</Text>
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Stack>

            <Flex>
              {SignInImageText.map(({ img, text }) => {
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
              <Box alignContent={"center"} display="grid">
                {" "}
                <Text color="gray.500">Create Account </Text>
              </Box>
              <Box>
                <Button
                  _hover="none"
                  onClick={() => navigate("/signup")}
                  colour="blue"
                >
                  <Text>SignUp</Text>
                </Button>
              </Box>
            </Flex>
          </Flex>
        </Stack>
      </Flex>
    </>
  );
};
