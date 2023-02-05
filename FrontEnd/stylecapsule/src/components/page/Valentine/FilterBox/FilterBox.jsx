import { Accordion, Box, Text } from "@chakra-ui/react";
import React from "react";
import { AccordionBox } from "../AcordioanBox/AcordioanBox";

export const FilterBox = () => {
  let first = [
    {
      text: "Sunflowers",
      route: "Sunflowers",
      data: "VALENTINE'S DAY FLOWERS BY TYPE",
    },
    {
      text: "Lilies",
      route: "Lilies",
    },
    {
      text: "Exotic",
      route: "Exotic",
    },
    {
      text: "Alstroemeria",
      route: "Alstroemeria",
    },
    {
      text: "Gardenia Plants",
      route: "Gardenia_Plants",
    },
    {
      text: "Sweet Flower",
      route: "Sweet_Flower",
    },
    {
      text: "Bright Flower",
      route: "Bright_Flower",
    },
  ];
  let second = [
    {
      text: "Red",
      route: "Sunflowers",
      data: "FLOWERS BY COLOR",
    },
    {
      text: "Purple",
      route: "Purple",
    },
    {
      text: "Green",
      route: "Green",
    },
    {
      text: "Blue",
      route: "Blue",
    },
  ];

  return (
    <Box>
      <Box   m="auto" mb="3rem">
        <Text>TOP 10 </Text>
        <Accordion>
          <AccordionBox List={first} />
          <AccordionBox List={second} />{" "}
        </Accordion>
      </Box>
    </Box>
  );
};
