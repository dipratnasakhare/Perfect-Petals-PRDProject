import { Box, SimpleGrid } from "@chakra-ui/react";
import {FooterTextBar} from "./FooterTextBar/FooterTextBar";
// import FooterLoginBox from "./FooterLoginBox/FooterLoginBox";
import { OrderCheckBox } from "./OrderCheckBox/OrderCheckBox";
import { ButtomTextBox } from "./ButtomTextBox/ButtomTextBox";
import { Contact } from "./ContactBox/Contact"
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
