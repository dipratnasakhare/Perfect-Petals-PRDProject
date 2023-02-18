import {
  Box,
  Button,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

export const Tasks = () => {
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
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Application Review</Td>
                  <Td>none</Td>
                  <Td>Megaiel</Td>
                  <Td>App Abarca, Huberto, usniversity</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Box mt="5rem" textAlign={"center"}>
          <Button>Add Task</Button>
        </Box>
      </Box>
    </Box>
  );
};
