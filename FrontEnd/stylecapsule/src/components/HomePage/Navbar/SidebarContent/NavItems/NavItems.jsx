import { Flex, Icon, Link } from "@chakra-ui/react";


export const NavItem = ({ icon, key, }) => {
  return (
    <Link
    border={"1px solid red"}
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            as={icon}
          />
        )}
        {key}
      </Flex>
    </Link>
  );
};
