import {
  Box,
  Button,
  Heading,
  Input,
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
import React, { useState } from "react";

export const NewProjects = () => {
  const [InputText, setInputText] = useState(true);

  const TableData = [
    { title: "name", depatment: "ui team", status: "in progress" },
    { title: "name", depatment: "ui team", status: "in progress" },
    { title: "name", depatment: "ui team", status: "in progress" },
    { title: "name", depatment: "ui team", status: "in progress" },
    { title: "name", depatment: "ui team", status: "in progress" },
  ];
  return (
    <Box border="1px solid" p="25px" borderRadius={"5px"}>
      <Box>
        <Heading>New Projects</Heading>
      </Box>

      <Box>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>Project Title
                </Th>
                <Th>Department</Th>
                <Th>status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {TableData.map((ele) => {
                return (
                  <Tr>
                  
                      <Td >
                        {ele.title}
                      </Td>
                    

                    <Td>{ele.depatment}</Td>
                    <Td>{ele.status}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
