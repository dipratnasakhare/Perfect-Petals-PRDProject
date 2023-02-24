import {
  Box,
  Button,
  Flex,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Text,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { DrawerTasks } from "./DrawerTasks";
import { DrawerUpdate } from "./DrawerUpdate";

export const Tasks = () => {
  const [TaskList, setTaskList] = useState([])


  const [Subject, setSubject] = useState(false)
  const [DueDate, setDueDate] = useState(false)
  const [Assigned, setAssigned] = useState(false)
  const [Target, setTarget] = useState(false)


  const HandelGetTask = async () => {
    let UserId = JSON.parse(localStorage.getItem("styleCapsuleToken")) || "null";
    UserId = UserId.UserId;
    const data = { UserId}
    try {
      let x = await axios.post(
        `${process.env.REACT_APP_MAIN_SERVER_URL}/AdminSideRoutes/Get-Admin-TaskList`, data
      );
      setTaskList(x.data.list)
    } catch (err) {
      console.log(err);
    }
  };


  const HandelDelete = async(id) => {
    let UserId =
      JSON.parse(localStorage.getItem("styleCapsuleToken")) || "null";
    UserId = UserId.UserId;
    const data = { UserId , id}
    try {
      let x = await axios.post(
        `${process.env.REACT_APP_MAIN_SERVER_URL}/AdminSideRoutes/Delete-Admin-TaskList`, data
      );
      HandelGetTask()
    } catch (err) {
      console.log(err);
    } 
  }

  const HandelToggle = async(id) => {
    console.log("Handeltoogle")
    let UserId =
      JSON.parse(localStorage.getItem("styleCapsuleToken")) || "null";
    UserId = UserId.UserId;
    const data = { UserId , id}

    try {
      let x = await axios.post(
        `${process.env.REACT_APP_MAIN_SERVER_URL}/AdminSideRoutes/Toggle-Admin-TaskList`, data
      );
      HandelGetTask()
    } catch (err) {
      console.log(err);
    } 
  }

useEffect(() => {
  HandelGetTask()
}, [])

console.log(TaskList, "TaskList")

  return (
    <Box
      h="40rem"
      backgroundSize={"cover"}
      backgroundImage={
        "https://images.pexels.com/photos/7130540/pexels-photo-7130540.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
      pt="1rem"
      pb="2rem"
    >
      <Box w="80%" m="auto">
        <Box>
          <TableContainer>
            <Table variant="simple">
              <TableCaption>Developer Tasks</TableCaption>
              <Thead>
                <Tr>
                  <Th>Subject</Th>
                  <Th>Due Date</Th>
                  <Th>Assigned to</Th>
                  <Th>Target</Th>
                  <Th>Delete / Update / Toggle</Th>
                </Tr>
              </Thead>
              <Tbody>
                {TaskList && TaskList.map((ele) => {
                  return(
                    <Tr  border={`2px solid ${ele.Status ?  "green" : "red"}`} >
                    <Td>{ele.Subject}</Td>
                    <Td>{ele.Date}</Td>
                    <Td>{ele.Assigned}</Td>
                    <Td>{ele.Target}</Td>
                    <Td>
                    <Flex gap="5px">
                    <Button onClick={()=>HandelDelete(ele["_id"])}>
                      <Text>Delete</Text>
                    </Button>
                    <DrawerUpdate HandelGetTask={HandelGetTask} data={ele} />
                      <Button onClick={()=>HandelToggle(ele["_id"])}>
                        <Text>{!ele.Status ? "Done" : "Pending"}</Text>
                      </Button>
                    </Flex>
                    </Td>
                  </Tr>
                  )
                })}
               
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Box mt="5rem" textAlign={"center"}>
          <DrawerTasks  HandelGetTask={HandelGetTask} />
        </Box>
      </Box>
    </Box>
  );
};
