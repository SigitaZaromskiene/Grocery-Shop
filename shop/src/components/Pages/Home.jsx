import Category from "./Category";
import Hero from "../Sections/Hero";
import About from "../Sections/About";
import LatestProducts from "../Sections/LatestProducts";

function Home (){

    return (
        <>
        <Hero/>
        <Category/>
        <About></About>
        <LatestProducts/>
        </>
    )
}
export default Home