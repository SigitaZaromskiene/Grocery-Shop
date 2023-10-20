import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Shop from "./Pages/Shop";
import Products from "./Pages/Products";
import Error404 from "./Pages/Error404";
import ContactUs from "./Sections/ContactUs";
import Register from "./Pages/Register";
import AboutUs from "./Pages/AboutUs";

function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<AboutUs />}></Route>
      <Route path="/category" element={<Products />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/contactus" element={<ContactUs />}></Route>
      <Route path="*" element={<Error404 />}></Route>
    </Routes>
  );
}

export default PageRoutes;
