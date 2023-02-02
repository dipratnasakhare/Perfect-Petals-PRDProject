import { Box, Text } from "@chakra-ui/react";
import React from "react";

export const NormalBox = ({ List }) => {
  return (
    <Box borderTop="1px solid">
      <h1>{List[0].data}</h1>{" "}
      {List.map((ele) => {
        return (
          <Box m="auto"  >
            <Text color={"blue"}>{ele.text}</Text>
          </Box>
        );
      })}
    </Box>
  );
};
