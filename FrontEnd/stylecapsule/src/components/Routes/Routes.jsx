import { Route, Routes } from "react-router-dom";

import { Home } from "../HomePage/Home/Home";
import PaymentPage from "../page/Add To Cart/PaymentPage/PaymentPage";
import { BirthdayPage } from "../page/Birthday Flower/BirthdayPage";
import { Gift_Baskets_Food } from "../page/Gift Baskets Food/Gift Baskets Food";
import { Lavender_Gifts } from "../page/Leavender Gifts/Leavender Gifts";
import { Forgot_Password_Page } from "../page/Login/ForgotPassword/ForgotPasswordBox";
import { Login_Page }  from "../page/Login/LoginBox/LoginBox";
import { SignUp_Page } from "../page/Login/SignUpBox/SignUpBox";
import { SingleFilterBox } from "../page/SingleFilterBox/SingleFilterBox";
import { Single_Product_Box } from "../page/Single_Product_Box/Single_Product_Box";
import { ValentinePage } from "../page/Valentine/ValentinePage";

export const RoutesOfAllPages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/signup" element={<SignUp_Page />} />
        <Route exact path="/login" element={<Login_Page />} />
        <Route exact path="/Forgot_Password" element={<Forgot_Password_Page />} />
        <Route exact path="/Valentine_Flowers" element={<ValentinePage />} />
        <Route path="/Flower/:url" element={<SingleFilterBox />} />
        <Route exact path="/Birthday_FLowers" element={<BirthdayPage />} />
        <Route exact path="/Gift_Baskets_Food" element={<Gift_Baskets_Food />} />
        <Route exact path="/Lavender_Gifts" element={<Lavender_Gifts />} />
        <Route exact path="/Single_Product_Box" element={<Single_Product_Box />} />
        <Route exact path="/Payment_Page" element={<PaymentPage />} />
      </Routes>
    </div>
  );
};
