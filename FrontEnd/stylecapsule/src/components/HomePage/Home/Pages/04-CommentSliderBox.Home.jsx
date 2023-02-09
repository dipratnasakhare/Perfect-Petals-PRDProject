import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { BsStar } from "react-icons/bs";

const comment = [
  {
    img: "https://denhamsflorist.com/wp-content/uploads/2019/04/user-1.png",
    heading: "The Best in Columbus, GA",
    text: "Seriously the best florist in Columbus, GA! Jenna and her team are so incredibly talented! I highly recommend them for any event you may have!",
    rating: 5,
    name: "Haley McPeters",
    work: "Event Coordinator",
  },
  {
    img: "	https://denhamsflorist.com/wp-content/uploads/2019/04/user-2.png",
    heading: "What More Could You Ask For?! ",
    text: "The floral arrangements for my wedding dinner were great! Guests were complimentary, and they added to the ambiance of the evening. Quality",
    rating: 5,
    name: "Nina Gordy",
    work: "Bride",
  },
];

const properties = {
  duration: 8000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};
export const CommentSliderBox = () => {
    return (
    <Box  bg="gray.200" w="80%" m="auto" p="10px">
      <Slide {...properties}>
        {comment.map((ele, index) => (
          <Grid gap="35px"  key={index}>
            <Box  display={"grid"} justifyContent="center">
              <Image src={ele.img} />
            </Box>
            <Box gap="5px" w="80%" m="auto">
              <Box display={"grid"} justifyContent="center" mb="25px">
                <Heading>{ele.heading}</Heading>
              </Box>
              <Box bg="green.100" p="50px" borderRadius={"25px"} display={"grid"} justifyContent="center">
                <Text>{ele.text}</Text>
              </Box>
            </Box>

          <Box  display="grid" justifyContent={"center"}>
          <Flex m="auto"  >
              {Array(5)
                .fill(0)
                .map((ele, i) =>
                  i < ele.rating ? (
                    <Box>
                      <BsStar fontSize={"1.2rem"} color="gold" />
                    </Box>
                  ) : (
                    <Box>
                      <BsStar fontSize={"1.2rem"} color="green" />
                    </Box>
                  )
                )}
            </Flex>

            <Box mt="15px"> 
              <Text>{ele.name} / {ele.work}</Text>
            </Box>

          </Box>
            {/* </Box> */}

          </Grid>

        ))}
      </Slide>
    </Box>
  );
};
