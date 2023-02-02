import {
  IconButton,
  Avatar,
  Box,
  Flex,
  HStack,
  VStack,
  useColorModeValue,
  Text,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spacer,
} from "@chakra-ui/react";

import { FiMenu, FiBell, FiChevronDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const MobileNav = ({ onOpen }) => {

  const RoutesText = [{ text: "Mens" }, { text: "Mens" }, { text: "Mens" }];
  const navigate = useNavigate()
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
      backgroundImage={"https://images.pexels.com/photos/7130503/pexels-photo-7130503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
    >
      <Text onClick={()=>navigate("/")} display={{ base: "none", md: "flex" }}
 fontSize="2xl" fontFamily="monospace" fontWeight="bold">
        Style Capsule
      </Text>

      {RoutesText.map((ele) => (
        <Box display={{ base: "none", md: "flex" }}
        >{ele.text}</Box>
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
        fontFamily="monospace"
        fontWeight="bold"
      >
        Style Capsule
      </Text>

      <HStack spacing={{ base: "0", md: "6" }}>
       
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton>
              <HStack>
                <Avatar
                  src="https://avatars.githubusercontent.com/u/107991169?s=400&u=5e8fd2b5a456df5e8abbf0a3aa24442431734e12&v=4"
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Ricky Sakhare</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>


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
