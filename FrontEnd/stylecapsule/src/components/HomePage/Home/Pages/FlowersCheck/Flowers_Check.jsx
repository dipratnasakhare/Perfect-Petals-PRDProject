import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

export const Flowers_Check = () => {
  const flowercheck = [
    {
      heading: "DESIGN AESTHETIC",
      text: "With every design we sketch and every bloom we select, we pour our hearts into ensuring the exquisiteness of our floral creations.",
    },
    {
      heading: "BUDGET CONSCIOUS",
      text: "We understand wedding come in all sizes and so do the budgets. That's why our team works diligently to meet your needs at the best possible prices.",
    },
    {
      heading: "FLORAL ARTISANS",
      text: "We are artisans when it comes to flowers. All our flowers are handpicked the same day the bouquet is made using the freshest and highest quality flowers available.",
    },
  ];
  return (
    <Flex
      w="80%"
      gap="20px"
      display={["grid", "grid", "grid", "flex"]}
      m="auto"
    >
      <Box m="auto" w={["100%", "100%", "80%", "100%"]}>
        <Image src="https://denhamsflorist.com/wp-content/uploads/2019/04/wedding-arrangements.png" />
      </Box>
      <Box>
        <Heading size="md" mb="25px">
         <Text> At Denham's, while we love designing any floral arrangement, when it
          comes to weddings, OUR PASSION REALLY SHINES. We'd love to be a part
          of your special day and the memories that will last a life time.</Text>
        </Heading>
        <Grid gap="25px">
          {flowercheck.map((ele) => (
            <Box>
              {" "}
             <Box mb="15px">
             <Heading  size="md"  as="bold">
                {ele.heading}
              </Heading>
             </Box>
              <Box><Text color="green.800">{ele.text}</Text></Box>
            </Box>
          ))}
        </Grid>
      </Box>
    </Flex>
  );
};
