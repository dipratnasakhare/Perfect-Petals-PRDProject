import { Box, Text ,Spacer,Divider} from "@chakra-ui/react";
import styled from "./buttomcss/ButtomTextBox.module.css";
export const ButtomTextBox = () => {


let last = [
    {
        name:'Accessibility'
    }, {
        name:'Terms & Conditions'
    }, {
        name:'Privacy'
    }, {
        name:'Interest-Based Ads'
    }, {
        name:'California Privacy Rights'
    }, {
        name:'California Supply Chain Transparency Act'
    },
]



  return (
    <>
    <Box className={styled.box}>
      <Box ml={20} mr={2}>
        <Text>How was your experience?</Text>
      </Box>
      <Box>
        <Text color="blue">Give feedback about our website</Text>
      </Box>
      <Spacer />
      <Box mr={12}>
        <Text color="blue">Mobile Site</Text>
      </Box>
      <Box mr={50}>
        <Text color="blue">Best By Canada</Text>
      </Box>
    </Box>
    <Divider/>

    <Box className={styled.buttom}>
    {last.map((ele)=>{
        return(
            <Box><Text>{ele.name}</Text></Box>
        )
    })}
    </Box>

    <Box mb="2rem" className={styled.text}><Text>In-store pricing may vary. Prices and offers are subject to change. © 2022 Best Buy. All rights reserved. BEST BUY, the BEST BUY logo, the tag design, and MY BEST BUY are trademarks of Best Buy and its affiliated companies.</Text></Box>
    </>
  );
}
