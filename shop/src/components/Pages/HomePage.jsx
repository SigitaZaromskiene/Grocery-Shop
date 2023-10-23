import Category from "../Sections/CategoryHome";
import Hero from "../Sections/Hero";
import About from "../Sections/About";
import LatestProducts from "../Sections/LatestProducts";
import Testimonials from "../Sections/Testimonials";
import Footer from "../Sections/Footer";
import Notification from "../Sections/Notification";

function HomePage () {

    return (
        <>
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