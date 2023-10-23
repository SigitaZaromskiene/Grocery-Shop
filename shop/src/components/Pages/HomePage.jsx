import Category from "../Sections/CategoryHome";
import Hero from "../Sections/Hero";
import About from "../Sections/About";
import LatestProducts from "../Sections/LatestProducts";
import Testimonials from "../Sections/Testimonials";
import Footer from "../Sections/Footer";
import Notification from "../Sections/Notification";
import Cart from "../Sections/Cart";
import { useSelector } from "react-redux/es/hooks/useSelector";

function HomePage () {


  const showCart = useSelector(state=>state.ui.cartIsVisible)

    return (
        <>
        {showCart && <Cart/>}
        <Notification title='error' text='error mess' className='error'/>
        <Hero/>
        <Category/>
        <About></About>
        <LatestProducts/>
        <Testimonials/>
        <Footer/>
      </>
    )
}
export default HomePage