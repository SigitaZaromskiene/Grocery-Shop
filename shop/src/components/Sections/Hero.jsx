import Btn from "../Buttons/Btn";
import heroImg from "../../UI/Img/salad.png";
import { filterSliceActions } from "../store/slices/filterSlice";
import { useDispatch } from "react-redux";

function Hero() {
  const dispatch = useDispatch();
  return (
    <div className="hero_container wrapper">
      <div className="hero_container_left">
        <h1>
          Make Healthy Life With <span>Fresh</span> Grocery Products
        </h1>
        <p>
          Get the best quality and most delicious grocery food in the country!
          Eat well. Live well.
        </p>
        <Btn
          text="Order now"
          to="/shop"
          action={() => dispatch(filterSliceActions.setCategory("All"))}
        />
      </div>
      <div className="hero_container_right">
        <img src={heroImg} alt="Vegetables" />
      </div>
    </div>
  );
}

export default Hero;
