import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const Accounts = () => {
  const [AdminData, setAdminData] = useState({});
  const getAdminData = async () => {
    let UserId =
      JSON.parse(localStorage.getItem("styleCapsuleToken")) || "null";
    UserId = UserId.UserId;
    const data = { UserId };
    try {
      let res = await axios.post(
        `${process.env.REACT_APP_MAIN_SERVER_URL}/AdminSideRoutes/Admin-get`,
        data
      );
      setAdminData(res.data.data);
      console.log(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAdminData();
  }, []);
  return (
    <Box
      backgroundSize={"cover"}
      backgroundImage={
        "https://images.pexels.com/photos/7130540/pexels-photo-7130540.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
      pt="1rem"
      pb="2rem"
      h="40rem"
    >
      <Box p="25px" gap="25px" display={["grid", "flex"]} w="80%" m="auto">
        <Box w={["50%", "50%", "30%"]} borderRadius={"55px"}>
          <Image
            borderRadius={"100%"}
            src="https://avatars.githubusercontent.com/u/107991169?s=400&u=5e8fd2b5a456df5e8abbf0a3aa24442431734e12&v=4"
          />
        </Box>

        <Flex display={["grid"]}>
          <Heading>
            {" "}
            {AdminData.first_name} {AdminData.last_name}
          </Heading>

          <Flex>
            <Text color="blue">{AdminData.email}</Text>
            <Text>{AdminData.user_type}</Text>
          </Flex>
        </Flex>
      </Box>

    <Box p="25px" gap="25px" display={"grid"} w="80%" m="auto">
    <Heading>Account</Heading>
      
      <Box display={"grid"} gap="25px">
        <Box>
          <Text>Email: - {AdminData.email}</Text>
        </Box>
        <Box>
          <Text>Mobile :- {AdminData.mobile_no}</Text>
        </Box>
        <Box>
          <Text>Password :- ****************</Text>
        </Box>
        <Box>
          <Text>
            Full Name :- {AdminData.first_name} {AdminData.last_name}
          </Text>
        </Box>
        <Box>
          <Text>Title :- {AdminData.user_type}</Text>
        </Box>
        <Box>
          <Text>Task :- 5</Text>
        </Box>
        <Box>
          <Text>Project :- 5</Text>
        </Box>
      </Box>
    </Box>
    </Box>
  );
};
