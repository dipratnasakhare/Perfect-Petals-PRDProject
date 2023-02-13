import { Box, Heading, Image, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const PaymentSucces = () => {
  const [timer, setTimer] = useState(5);
  const toast = useToast();
  const [Imagecart, setIMage] = useState(
    "https://www.cashlesso.com/wp-content/uploads/2020/03/19-March-Final-animation.gif"
  );
  const navigate = useNavigate();

  const HandelDelteCartData = async () => {
    let UserId = JSON.parse(localStorage.getItem("styleCapsuleToken"));
    UserId = UserId.UserId;
    let data = {
      UserId,
    };

    try {
      let x = await axios.post(
        `${process.env.REACT_APP_MAIN_SERVER_URL}/User_Cart_Data/Delete_User_data`,
        data
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let id;
    id = setInterval(() => {
      setTimer((ele) => {
        if (ele <= 1) {
          setIMage(
            "https://service-isib.ru/design/builds/static/img/check-circle.gif"
          );

          if (ele < -1) {
            toast({
              position: "top",
              title: "Order is Placed",
              description: "Order is Placed",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
            navigate("/");
            clearInterval(id);
          }
        }
        return ele - 1;
      });
    }, 1000);

    HandelDelteCartData();

    const cleanup = () => {
      clearInterval(id);
    };
    return cleanup;
  }, []);

  return (
    <Box justifyContent={"center"} pt="1rem" display="grid" pb="10rem">
      <Image src={Imagecart} />{" "}
    </Box>
  );
};
