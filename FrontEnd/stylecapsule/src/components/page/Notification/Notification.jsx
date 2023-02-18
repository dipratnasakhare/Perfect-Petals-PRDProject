import { Box } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const NotificationBox = () => {

    const [List , setList] = useState([])
    const [Loading , setLoading] = useState(false)

    const SetOrderDetails = async () => {
        let UserId = JSON.parse(localStorage.getItem("styleCapsuleToken"));
        UserId = UserId.UserId;
        let data = {
          UserId
        };
    
        try {
            setLoading(true)
          let x = await axios.post(
            `${process.env.REACT_APP_MAIN_SERVER_URL}/AdminSideRoutes/GetOrderForUser`,
            data
          );
          setLoading(false)
          setList(x.data.Order_Details[0].OrderDetails)
          console.log(List)
        } catch (err) {
          console.log(err);
        }
      };
    


      useEffect(() => {
        SetOrderDetails()
      }, [])


    return (
        <Box h="50rem">
            {Loading ? "......loading" : <Box>
            {List && List.map((ele) => {
                return ele.Date
            })}
            </Box>}
           
        </Box>
    )
}
