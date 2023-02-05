import { Button, Heading } from "@chakra-ui/react";
import React from "react";
import { CommentBox } from "./Pages/Comment/CommentBox";
import Carousel from "./Pages/FirstBox/FirstBox"
import { Flowers_Check } from "./Pages/FlowersCheck/Flowers_Check";
import { Help_Image_box } from "./Pages/HelpIMageBox/Help_Image_box";
import { New_Arrivals } from "./Pages/New Arrivals/New_Arrivals";
import { WelcomeBox } from "./Pages/WelcomeBox/WelcomeBox";
export const Home = () => {
  return (
    <div className="HomePage">
      <Carousel  />
      <WelcomeBox />
      {/* <New_Arrivals /> */}
      <Flowers_Check />
      <CommentBox />
      <Help_Image_box />
    </div>
  );
};
