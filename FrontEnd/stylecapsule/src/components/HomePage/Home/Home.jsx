import React from "react";
import { ImageBox } from "./Pages/01-ImageBox.Home";
import { WelcomeTextBox } from "./Pages/02-WelcomeTextBox.Home.";
import { ProductDetailsTextBox } from "./Pages/03-ProductDetailsTextBox.Home";
import { CommentSliderBox } from "./Pages/04-CommentSliderBox.Home";
import { ThankYouBox } from "./Pages/05-ThankYouBox.Home";


export const Home = () => {
  return (
    <div className="HomePage">

    {/* image Box first of flower   */}
      <ImageBox  /> 

    {/* welcome Box text to introduce about website */}
      <WelcomeTextBox />

      {/* <New_Arrivals />  trying to add product slider */}


      {/* some details about website   */}
      <ProductDetailsTextBox />

       {/* some comment about website in slider  */}
      <CommentSliderBox />

       {/* last box to make user good and some help text written */}
      <ThankYouBox />
    </div>
  );
};
