import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Image,
  InputRightElement,
  Stack,
  Button,
  Text,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login_Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  const [serverLoading, SetServerLoading] = useState(false)
  const navigate = useNavigate();

  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


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



const HandelLoginButton =  async () => {
  const data = {email,password}
   try{
    SetServerLoading(true)
    let x = await axios.post("http://localhost:4000/user/login", data)
    localStorage.setItem("styleCapsuleToken", JSON.stringify(x.data))  
     SetServerLoading(false)
    toast({
      title: x.data.msg,
      description: x.data.msg,
      status: x.data.status,
      duration: 9000,
      isClosable: true,
    })
    navigate("/")
   }catch(err){
    console.log(err)
    SetServerLoading(false)
    toast({
      title: "Something is wrong please try later",
      status: "error",
      duration: 9000,
      isClosable: true,
    })
   }
}


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
                  <Text mb="15px" fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    Login to Style Capsule
                  </Text>
                </Stack>
                <Box>
                  <Stack>
                    <FormControl id="Email" isRequired>
                      <FormLabel>Email address</FormLabel>
                      <Input type="Email" value={email}  onChange={(e)=> setEmail(e.target.value)}/>
                    </FormControl>
                    <FormControl id="Password" isRequired>
                      <FormLabel>Password</FormLabel>
                      <InputGroup>
                        <Input
                          type={showPassword ? "text" : "Password"}
                          value={password} onChange={(e)=> setPassword(e.target.value)}
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
                    </FormControl>

                    <Box>
                      <Text onClick={()=>navigate("/Forgot_Password")} color="blue">Forgot Password</Text>
                    </Box>

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
                        Login
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
                        <Image m="auto" w="70%" src={img} />
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
                    SignUp
                  </Button>
                </Box>
              </Flex>
            </Flex>
          </Stack>
        </Flex>
      
    </>
  );
};
