import {
  IconButton,
  Avatar,
  Box,
  Flex,
  HStack,
  VStack,
  Text,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spacer,
  useToast,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiMenu, FiBell, FiChevronDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const MobileNav = ({ onOpen }) => {
  const [User_Login, setUser_Login] = useState(false);
  const toast = useToast();
  const [itForUpdate, seItForUpdate] = useState("");
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const RoutesText = [
    { text: "Valentine", route: "/Valentine_Flowers" },
    { text: "BirthDay", route: "/Birthday_Flowers" },
    { text: "Gift Baskets", route: "/Gift_Baskets_Food" },
    { text: "Lavender Gifts", route: "/Lavender_Gifts" },
  ];

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("styleCapsuleToken")) || "null";

    console.log(user, "user i 38", User_Login);

    if (user !== "null") {
      setUser_Login(true);
      setUserName(user.name);
    }
  });

  const HandelLogout = () => {
    localStorage.removeItem("styleCapsuleToken");
    setUser_Login(false);
    toast({
      description: "User Log out successfully",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Flex
      pl="1rem"
      pr="1rem"
      height="20"
      alignItems="center"
      borderBottomWidth="1px"
      bg={"white"}
      backgroundSize={"cover"}
      justifyContent="space-between"
      backgroundImage={
        "https://images.pexels.com/photos/7130503/pexels-photo-7130503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    >
      <Text
        onClick={() => navigate("/")}
        display={{ base: "none", md: "flex" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Perfect Petals
      </Text>

      {RoutesText.map((ele) => (
        <Box
          onClick={() => navigate(ele.route)}
          display={{ base: "none", md: "flex" }}
        >
          <Text>{ele.text}</Text>
        </Box>
      ))}

      {/* <Spacer /> */}

      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        onClick={() => navigate("/")}
        fontFamily="monospace"
        fontWeight="bold"
      >
        Perfect Petals
      </Text>

      <HStack spacing={{ base: "0", md: "6" }}>
        {User_Login ? (
          <>
            <Flex alignItems={"center"}>
              <Menu>
                <MenuButton>
                  <HStack>
                    {/* <Avatar src="" /> */}
                    <VStack
                      display={{ base: "none", md: "flex" }}
                      alignItems="flex-start"
                      spacing="1px"
                      ml="2"
                    >
                      <Text fontSize="sm"> </Text>
                      <Text fontFamily={"cursive"} color="gray.600">
                        {userName}
                      </Text>
                    </VStack>
                    <Box display={{ base: "none", md: "flex" }}>
                      <FiChevronDown />
                    </Box>
                  </HStack>
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Text> Profile </Text>
                  </MenuItem>
                  <MenuItem>
                    {" "}
                    <Text> Settings </Text>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem onClick={HandelLogout}>
                    {" "}
                    <Text> Sign out </Text>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>

            <IconButton
              size="lg"
              variant="ghost"
              aria-label="open menu"
              icon={<AiOutlineShoppingCart />}
              onClick={() => navigate("/Payment_Page")}
            />
          </>
        ) : (
          <Button onClick={() => navigate("/login")}>Login</Button>
        )}

        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
      </HStack>
    </Flex>
  );
};
