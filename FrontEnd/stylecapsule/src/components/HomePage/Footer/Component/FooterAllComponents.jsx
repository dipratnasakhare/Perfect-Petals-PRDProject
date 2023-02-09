import { Box } from "@chakra-ui/react";
import { OrderCheckBox } from "./01-OrderCheckBox/OrderCheckBox";
import {FooterTextBar} from "./02-FooterTextBar/FooterTextBar";
import { Contact } from "./03-ContactBox/Contact"
import { ButtomTextBox } from "./04-ButtomTextBox/ButtomTextBox";



export default function footer() {
  return (
    <>
     <OrderCheckBox />
      <Box
        w="90%"
        m="auto"
        mt="3rem"
        display={["grid", "flex"]}
        gap={1}
      >
        <Box w={["90%", "140%"]} m="auto">
          <FooterTextBar />
        </Box>
        <Box   w={["100%", "100%", "100%", "100%"]} >
          <Contact />
        </Box>
      </Box>

      <Box w="98%" m="auto" display={["none","none","none","grid", ]}>


        
      <ButtomTextBox />
      </Box>
    </>
  );
}
