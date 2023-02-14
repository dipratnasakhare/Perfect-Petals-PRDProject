import {
  Box,
  Text,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";

export const AccordionBox = ({ List }) => {

  return (
    <Box borderTop="1px solid">
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <h1>Products</h1>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {List.map((ele) => {
            return (
              <Box>
                <Text>
                  {ele.Name}
                </Text>
              </Box>
            );
          })}
        </AccordionPanel>
      </AccordionItem>
    </Box>
  );
};
