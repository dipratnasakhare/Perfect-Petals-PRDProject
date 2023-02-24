import {
  Button,
  Drawer,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Image,
  Text,
  Grid,
  Flex,
  useDisclosure,
  Input,
  Select,
  FormLabel,
  DrawerBody,
  Stack,
  InputGroup,
  InputLeftAddon,
  Textarea,
  InputRightAddon,
  useToast,
} from "@chakra-ui/react";
import { BiEdit } from "react-icons/bi";
import { BsStar } from "react-icons/bs";
import React, { useRef, useState } from "react";
import axios from "axios";

export const DrawerTasks = ({HandelGetTask}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();
  const toast = useToast();

  const [Subject, setSubject] = useState("")
  const [Date, setDate] = useState("")
  const [Assigned, setAssigned] = useState("")
  const [Target, setTarget] = useState("")

  const HandelAddTask = async () => {
    let UserId = JSON.parse(localStorage.getItem("styleCapsuleToken")) || "null";
    UserId = UserId.UserId;

    console.log(UserId)
    const data = {
      UserId,
      data:{
        Subject, 
        Date,
        Assigned,
        Target
      }
    }
    try {
      let x = await axios.post(
        `${process.env.REACT_APP_MAIN_SERVER_URL}/AdminSideRoutes/Admin-TaskList`, data
      );

      onClose()
      HandelGetTask()
    } catch (err) {
      console.log(err);
    }
    HandelGetTask()
  };

  return (
    <>
      <Button colorScheme="green" onClick={onOpen}>
       <Text> Task</Text>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Add task</DrawerHeader>
          <DrawerBody>
            <Grid gap="10px">
                <Box>
                  <Text fontFamily={"cursive"}>Subject</Text>
                </Box>
                <Box>
                  <Input value={Subject} onChange={(e) => setSubject(e.target.value)}  />
                </Box>

                <Box>
                  <Text fontFamily={"cursive"}>Date</Text>
                </Box>
                <Box>
                  <Input type="Date" value={Date} onChange={(e) => setDate(e.target.value)} />
                </Box>

                <Box>
                  <Text fontFamily={"cursive"}>Assigned to</Text>
                </Box>
                <Box>
                  <Input value={Assigned} onChange={(e) => setAssigned(e.target.value)} />
                </Box>

                <Box>
                  <Text fontFamily={"cursive"}>Target</Text>
                </Box>
                <Box>
                  <Input value={Target} onChange={(e) => setTarget(e.target.value)} />
                </Box>
            </Grid>
          </DrawerBody>
          <DrawerFooter borderTopWidth="0.2px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={HandelAddTask} colorScheme="blue">
              Submit
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
