import {
  Box,
  Button,
  Flex,
  Grid,
  Spacer,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { PaginationBox } from "../../page/Valentine/Pagination/PaginationBox";

export const Users = () => {
  const [Loading, setLoading] = useState(false);
  const [List, setList] = useState([]);
  const toast = useToast()
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);


  const GetUserData = async () => {
    setLoading(true)
    try {
      let res =  await axios.get(`${process.env.REACT_APP_MAIN_SERVER_URL}/user?page=${page}&limit=4`);
      setLoading(false)
      setList(res.data.All_User);
      setTotal(res.data.totalPages)
    } catch (err) {
      console.log(err);
    }
  };
  const HandelDelte = async (id) => {
    let UserId = JSON.parse(localStorage.getItem("styleCapsuleToken"));
    UserId = UserId.UserId;
    let data = {
      UserId : id,
    };

    try {
      let x = await axios.post(
        `${process.env.REACT_APP_MAIN_SERVER_URL}/user/delete`,
        data
      );
      toast({
        position: "top",
        title: x.data.msg,
        description: x.data.msg,
        status: x.data.status,
        duration: 9000,
        isClosable: true,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   GetUserData(page)       
  // }, [HandelDelte]);
  useEffect(() => {
    GetUserData()       
  }, [page]);

  return (
    <Box backgroundSize={"cover"} backgroundImage={"https://images.pexels.com/photos/7130540/pexels-photo-7130540.jpeg?auto=compress&cs=tinysrgb&w=600"} pt="1rem" pb="2rem">
    <Box >
      {Loading ? (
        <Box   h="40rem"
        display="grid"
        justifyContent={"center"}
        alignContent="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Box>
      ) : (
        <Box w={["90%", "90%", "60%"]} m="auto">
          <Grid gap="25px">
            {List &&
              List.map((ele) => {
                return (
                  <Flex gap="5px" p="5px" display={{base:"grid", md:"grid", lg:"flex"}} border={"1px solid"}>
                    <Grid gap="5px">
                      <Box>
                        <Text>
                          Name- {ele.first_name} {ele.last_name}
                        </Text>
                      </Box>
                      <Box>
                        <Text>Mobile- {ele.mobile_no}</Text>
                      </Box>
                      <Box>
                        <Text>Email- {ele.email}</Text>
                      </Box>
                      <Box>
                        <Text>User- {ele.user_type}</Text>
                      </Box>
                     
                    </Grid>
                    <Spacer />
                    <Box display={"grid"} alignContent="center" textAlign={"center"}>
                      <Button onClick={()=>HandelDelte(ele.UserId)}>Delete</Button>
                    </Box>
                  </Flex>
                );
              })}
          </Grid>
        </Box>
      )}
    </Box>

    <Box
        mb="2rem"
        display={"grid"}
        justifyContent={"center"}
        m="auto"
        mt="1rem"
        w="80%"
      >
        {" "}
        <PaginationBox page={page} setPage={setPage} total={total} />
      </Box>{" "}
    </Box>
  );
};
