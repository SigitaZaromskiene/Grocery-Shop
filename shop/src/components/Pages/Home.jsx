import Category from "./Category";
import Hero from "../Sections/Hero";
import About from "../Sections/About";
import LatestProducts from "../Sections/LatestProducts";
import Testimonials from "../Sections/Testimonials";

function Home (){

    return (
        <>
        <Hero/>
        <Category/>
        <About></About>
        <LatestProducts/>
        <Testimonials/>
        </>
    )
}
export default Home