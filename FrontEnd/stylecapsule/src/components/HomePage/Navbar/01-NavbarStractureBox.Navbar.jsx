import {
  IconButton,
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
  useToast,
  Image,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiMenu, FiBell, FiChevronDown } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import { Debouncing } from "../../page/Debouncing/Debouncing";
import logo from "../../Image/Logo.png"

export const NavbarStractureBox = ({ onOpen }) => {
  const [User_Login, setUser_Login] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [AdminUser, setAdminUser] = useState(false)

  const RoutesText = [
    { text: "Valentine", route: "/Valentine_Flowers" },
    // { text: "BirthDay", route: "/Birthday_Flowers" },
    { text: "Gift Baskets", route: "/Gift_Baskets_Food" },
    { text: "Lavender Gifts", route: "/Lavender_Gifts" },
  ];

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("styleCapsuleToken")) || "null";

    if (user !== "null") {
      setUser_Login(true);
      setUserName(user.name);
    }

    if (user.msg === "Admin login successfully") {
      setAdminUser(true)
    }
  });

  const HandelLogout = () => {
    localStorage.removeItem("styleCapsuleToken");
    setUser_Login(false);
    setAdminUser(false)

    toast({
      position: "top",
      description: "User Log out successfully",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    navigate("/")
  };

  let Active = {
    textDecoration: "none",
    color: "blue"
  };

  let NotActive = {
    textDecoration: "none",
    color: "black"
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

      <Flex onClick={() => navigate("/")}
        display={{ base: "none", md: "flex" }}
        fontSize="2xl"
        gap="15px"
        fontFamily="monospace"
        fontWeight="bold">
        <Image w="35px" src={logo} />
        <Text>
          Perfect Petals
        </Text>
      </Flex>

      {RoutesText.map((ele, i) => (
        // <Box
        //   onClick={() => navigate(ele.route)}
        //   display={{ base: "none", md: "flex" }}
        // >
        //   <Text>{ele.text}</Text>
        // </Box>
      <Box  display={{ base: "none", md: "flex" }}
      >
          <NavLink
        key={i}
        style={({ isActive }) => (isActive ? Active : NotActive)}
        to={ele.route}
        end
      >
        <Text>{ele.text}</Text>
      </NavLink>
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
        fontSize={["xl", "2xl"]}
        onClick={() => navigate("/")}
        fontFamily="monospace"
        fontWeight="bold"
      >
        Perfect Petals
      </Text>

      <Debouncing />

      <HStack spacing={{ base: "0", md: "6" }}>
        {User_Login ? (
          <>
            <Flex alignItems={"center"}>
              <Menu>
                <MenuButton>
                  <HStack>
                    {/* <Avatar src="" /> */}
                    <VStack
                      display={{ md: "flex" }}
                      alignItems="flex-start"
                      spacing="1px"
                      ml="2"
                    >
                      <Text fontSize="sm"> </Text>
                      <Text fontFamily={"cursive"} color="gray.600">
                        {userName}
                      </Text>
                    </VStack>
                    <Box display={{ md: "flex" }}>
                      <FiChevronDown />
                    </Box>
                  </HStack>
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Text onClick={() => navigate("/Notification")}>Order</Text>
                  </MenuItem>
                  <MenuItem>
                    <Text onClick={() => navigate("/Wishlist")}> Wishlist </Text>
                  </MenuItem>
                  <MenuItem>
                    {" "}
                    <Text onClick={() => navigate("/Payment_Page")}> Cart </Text>
                  </MenuItem>


                  {AdminUser ? <MenuItem>
                    {" "}
                    <Text onClick={() => navigate("/AdminDashboard")}> Admin Dashboard </Text>
                  </MenuItem> : ""}
                  <MenuDivider />
                  <MenuItem onClick={HandelLogout}>
                    {" "}
                    <Text> Sign out </Text>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>

            <IconButton
              display={{ base: "none", md: "flex" }}
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
      </HStack>
    </Flex>
  );
};