import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";


import ContactUs from "./Sections/ContactUs";
import HomePage from "./Pages/HomePage";
import AboutUsPage from "./Pages/AboutUsPage";
import CategoriesPage from "./Pages/CategoriesPage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import Error404Page from "./Pages/Error404Page";
import ShopPage from "./Pages/ShopPage";
import Cart from "./Sections/Cart";

function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about" element={<AboutUsPage />}></Route>
      <Route path="/category" element={<CategoriesPage />}></Route>
      <Route path="/shop" element={<ShopPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/register" element={<RegisterPage/>}></Route>
      <Route path="/contactus" element={<ContactUs/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="*" element={<Error404Page />}></Route>
    </Routes>
  );
}

export default PageRoutes;
