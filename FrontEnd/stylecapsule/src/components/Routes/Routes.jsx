import { Route, Routes } from "react-router-dom";

import { Home } from "../HomePage/Home/Home";
import { BirthdayPage } from "../page/Birthday Flower/BirthdayPage";
import { Gift_Baskets_Food } from "../page/Gift Baskets Food/Gift Baskets Food";
import { Lavender_Gifts } from "../page/Leavender Gifts/Leavender Gifts";
import { Forgot_Password_Page } from "../page/Login/ForgotPassword/ForgotPasswordBox";
import { Login_Page }  from "../page/Login/LoginBox/LoginBox";
import { SignUp_Page } from "../page/Login/SignUpBox/SignUpBox";
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
        <Route exact path="/Birthday_FLowers" element={<BirthdayPage />} />
        <Route exact path="/Gift_Baskets_Food" element={<Gift_Baskets_Food />} />
        <Route exact path="/Lavender_Gifts" element={<Lavender_Gifts />} />



        
      </Routes>
    </div>
  );
};
