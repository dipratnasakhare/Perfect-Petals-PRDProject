import { Box, Text, Image, SimpleGrid, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Heading } from "@chakra-ui/react";

export const AccordionBox = ({List}) => {
    
    return (
      <Box borderTop="1px solid">
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left' >
                <h1>{
                List[0].data}</h1 >
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {List.map((ele) => {
              return (
                <Box >
                  <Text >{ele.text}</Text>
                </Box>
              );
            })}
          </AccordionPanel>
        </AccordionItem>
    </Box>
  
    )
  }