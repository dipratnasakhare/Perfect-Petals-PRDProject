import { Route, Routes } from "react-router-dom";
import { AdminDashboard } from "../AdminDashboard/AdminDashboard";

import { Home } from "../HomePage/Home/Home";
import PaymentPage from "../page/Add To Cart/PaymentPage/PaymentPage";
import { BirthdayPage } from "../page/Birthday Flower/BirthdayPage";
import { ErrorPage } from "../page/Error/ErrorPage";
import { GiftBasketsFood } from "../page/Gift Baskets Food/Gift Baskets Food";
import { LavenderGifts } from "../page/Leavender Gifts/Leavender Gifts";
import { ForgotPasswordPage } from "../page/Login/ForgotPassword/ForgotPasswordBox";
import { LoginPage }  from "../page/Login/LoginBox/LoginBox";
import { SignUpPage } from "../page/Login/SignUpBox/SignUpBox";
import { OrderHistory } from "../page/OrderHistory/OrderHistory";
import { SingleFilterBox } from "../page/SingleFilterBox/SingleFilterBox";
import { SingleProductBox } from "../page/SingleProductBox/SingleProductBox";
import { ValentinePage } from "../page/Valentine/ValentinePage";
import { WishlistPage } from "../page/WishListPage/WishlistPage"
export const RoutesOfAllPages = () => {







  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/signup" element={<SignUpPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/Forgot_Password" element={<ForgotPasswordPage />} />
        <Route exact path="/Valentine_Flowers" element={<ValentinePage />} />
        <Route exact path="/Flower/:url" element={<SingleFilterBox />} />
        <Route exact path="/Birthday_FLowers" element={<BirthdayPage />} />
        <Route exact path="/Gift_Baskets_Food" element={<GiftBasketsFood />} />
        <Route exact path="/Lavender_Gifts" element={<LavenderGifts />} />
        <Route path="/Single_Product_Box/:url" element={<SingleProductBox />} />
        <Route exact path="/Payment_Page" element={<PaymentPage />} />
        <Route exact path="/Wishlist" element={<WishlistPage />} />
        <Route exact path="/AdminDashboard" element={<AdminDashboard />} />
        <Route exact path="/Notification" element={<OrderHistory />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};
