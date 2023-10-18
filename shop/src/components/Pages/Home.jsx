import Category from "./Category";
import Hero from "../Sections/Hero";
import About from "../Sections/About";
import LatestProducts from "../Sections/LatestProducts";
import Testimonials from "../Sections/Testimonials";
import Footer from "../Sections/Footer";

function Home () {

    return (
        <>
        <Hero/>
        <Category/>
        <About></About>
        <LatestProducts/>
        <Testimonials/>
        <Footer/>
        </>
    )
}
export default Home