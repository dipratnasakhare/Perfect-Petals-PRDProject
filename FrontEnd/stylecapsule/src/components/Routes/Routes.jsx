import { Route, Routes } from "react-router-dom";

import { Home } from "../HomePage/Home/Home";
import { ForgotPasswordBox } from "../page/Login/ForgotPassword/ForgotPasswordBox";
import  { LoginBox }  from "../page/Login/LoginBox/LoginBox";
import { SignUpBox } from "../page/Login/SignUpBox/SignUpBox";
import { ValentinePage } from "../page/Valentine/ValentinePage";

export const RoutesOfAllPages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/signup" element={<SignUpBox />} />
        <Route exact path="/login" element={<LoginBox />} />
        <Route exact path="/forgotpassword" element={<ForgotPasswordBox />} />

        <Route exact path="/valentine" element={<ValentinePage />} />



        
      </Routes>
    </div>
  );
};
