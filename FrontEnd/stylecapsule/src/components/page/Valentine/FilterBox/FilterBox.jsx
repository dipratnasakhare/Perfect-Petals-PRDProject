import { Accordion, Box, Text } from "@chakra-ui/react";
import React from "react";
import { AccordionBox } from "../AcordioanBox/AcordioanBox";

export const FilterBox = () => {
  let first = [
    {
      text: "Sunflowers",
      route: "Sunflower Flowers",
      data: "VALENTINE'S DAY FLOWERS BY TYPE",
    },
    {
      text: "Exotic",
      route: "Exotic Flowers",
    },
    {
      text: "Alstroemeria",
      route: "Alstroemeria",
    },
    {
      text: "Gardenia Plants",
      route: "Gardenia Plants",
    },
    {
      text: "Sweet Flower",
      route: "Sweet Flowers",
    },
    {
      text: "Bright Flower",
      route: "Bright Flowers",
    },
  ];

  let second = [
    {
      text: "Red",
      route: "Red Colour",
      data: "FLOWERS BY COLOR",
    },
    {
      text: "Purple",
      route: "Purple Colour",
    },
    {
      text: "Blue",
      route: "Blue Colour",
    },
  ];

  return (
    <Box>
      <Box m="auto" mb="3rem">
        <Text>TOP 10 </Text>
        <Accordion>
          <AccordionBox List={first} />
          <AccordionBox List={second} />{" "}
        </Accordion>
      </Box>
    </Box>
  );
};
