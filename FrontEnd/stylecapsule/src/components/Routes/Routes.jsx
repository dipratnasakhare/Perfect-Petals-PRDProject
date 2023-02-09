import { Route, Routes } from "react-router-dom";

import { Home } from "../HomePage/Home/Home";
import PaymentPage from "../page/Add To Cart/PaymentPage/PaymentPage";
import { BirthdayPage } from "../page/Birthday Flower/BirthdayPage";
import { GiftBasketsFood } from "../page/Gift Baskets Food/Gift Baskets Food";
import { LavenderGifts } from "../page/Leavender Gifts/Leavender Gifts";
import { ForgotPasswordPage } from "../page/Login/ForgotPassword/ForgotPasswordBox";
import { LoginPage }  from "../page/Login/LoginBox/LoginBox";
import { SignUpPage } from "../page/Login/SignUpBox/SignUpBox";
import { SingleFilterBox } from "../page/SingleFilterBox/SingleFilterBox";
import { SingleProductBox } from "../page/SingleProductBox/SingleProductBox";
import { ValentinePage } from "../page/Valentine/ValentinePage";

export const RoutesOfAllPages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/signup" element={<SignUpPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/Forgot_Password" element={<ForgotPasswordPage />} />
        <Route exact path="/Valentine_Flowers" element={<ValentinePage />} />
        <Route path="/Flower/:url" element={<SingleFilterBox />} />
        <Route exact path="/Birthday_FLowers" element={<BirthdayPage />} />
        <Route exact path="/Gift_Baskets_Food" element={<GiftBasketsFood />} />
        <Route exact path="/Lavender_Gifts" element={<LavenderGifts />} />
        <Route exact path="/Single_Product_Box" element={<SingleProductBox />} />
        <Route exact path="/Payment_Page" element={<PaymentPage />} />
      </Routes>
    </div>
  );
};
