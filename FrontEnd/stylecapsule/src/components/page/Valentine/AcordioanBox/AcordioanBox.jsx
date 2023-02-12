import {
  Box,
  Text,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const AccordionBox = ({ List }) => {
  const navigate = useNavigate();

  return (
    <Box borderTop="1px solid">
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <h1>{List[0].data}</h1>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {List.map((ele) => {
            return (
              <Box>
                <Text onClick={() => navigate(`/Flower/${ele.route}`)}>
                  {ele.text}
                </Text>
              </Box>
            );
          })}
        </AccordionPanel>
      </AccordionItem>
    </Box>
  );
};
