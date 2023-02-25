import { Accordion, AccordionButton, Image ,AccordionIcon, AccordionItem, AccordionPanel, Box, Spinner, Text, Grid } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const OrderHistory = () => {
  const [List, setList] = useState([]);
  const [Loading, setLoading] = useState(false);

  const SetOrderDetails = async () => {
    let UserId = JSON.parse(localStorage.getItem("styleCapsuleToken"));
    UserId = UserId.UserId;
    let data = {
      UserId,
    };

    try {
      setLoading(true);
      let x = await axios.post(
        `${process.env.REACT_APP_MAIN_SERVER_URL}/AdminSideRoutes/GetOrderForUser`,
        data
      );
      setLoading(false);
      const list = x.data.Order_Details[0].OrderDetails;

      let obj = {};
      for (let i = 0; i < list.length; i++) {

      if(list[i].Date !== undefined){
        let char = list[i].Date.trim().split(" ")
        let x = `${char[0]}  ${char[1]}  ${char[3]}`
 
        if (obj[x] == undefined) {
           obj[x] = [list[i]];
         } else {
           obj[x].push(list[i]);
         }
      }
      
      }
      let arr = [];
      for (let i in obj) {
        arr.push({ date: i, arr: obj[i] });
      }
      setLoading(false);
      setList(arr);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    SetOrderDetails();
  }, []);

  return (
    <Box w="80%" m="auto" mt="2rem" mb="3rem">
      {Loading ? (
        <Box
          h="40rem"
          display="grid"
          justifyContent={"center"}
          alignContent="center"
        >
          {" "}
          <Box>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Box>
        </Box>
      ) : (
        <Box>
          <Accordion allowToggle>
           {List && List.map((ele, i) => {
            return(
              <Box key={Date.now() % Math.random() + ele.date} borderTop="1px solid">
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <h1>{ele.date}</h1>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                <Grid gap="8px"   >
                {ele.arr.map((item) => {
                    return (
                      <Box   key={Date.now() % Math.random()}>
                      <Box >
                        <Image w="55px" src={item.ImgUrl} />
                      </Box>
                      <Box>
                        <Text>{item.Name}</Text>
                        <Text>{item.Price}</Text>
                      </Box>
                      </Box>
                    );
                  })}
                </Grid>
                </AccordionPanel>
              </AccordionItem>
            </Box>
            )
           })}
          </Accordion>
        </Box>
      )}
    </Box>
  );
};
