import {Routes} from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Shop from "./Shop";
import Products from "./Products";
import About from "./About";
import Error404 from "./Error404";


function PageRoutes () {

return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='*' element={<Error404/>}></Route>
    </Routes>
)
}

export default PageRoutes