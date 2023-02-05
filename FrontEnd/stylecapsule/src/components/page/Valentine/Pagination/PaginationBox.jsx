import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";

export const PaginationBox = ({page, setPage,total}) => {

    console.log(page, total)
  return (
      <Flex gap="5">
        <Box>
          {" "}
          <Button isDisabled={page <= 1} onClick={() => setPage(page - 1)}>
            Prev
          </Button>
        </Box>{" "}
        <Box>
          {" "}
          <Button>{page}</Button>
        </Box>
        <Box>
          {" "}
          <Button isDisabled={page >= total} onClick={() => setPage(page + 1)}>
            Next
          </Button>
        </Box>
      </Flex>
  );
};
