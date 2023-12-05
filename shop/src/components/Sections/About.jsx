import pic from "../../UI/Img/veg.png";
import Btn from "../Buttons/Btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { filterSliceActions } from "../store/slices/filterSlice";
import { useDispatch } from "react-redux";

function About() {
  const dispatch = useDispatch();

  return (
    <div className="about_us wrapper">
      <div className="about_us_right">
        <img src={pic} alt="Vegetables" />
      </div>
      <div className="about_us_left">
        <h2>
          Best Quality <span>Natural</span> And Fresh Grocery
        </h2>
        <p className="about_us_left_paragraph">
          From the farm directly, fresh organic products are delivered weekly.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faCheck} className="about_us_left_icon" />
            <p>100% organic & natural products</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} className="about_us_left_icon" />
            <p>Free returns</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} className="about_us_left_icon" />
            <p>Fast delivery</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} className="about_us_left_icon" />
            <p>Competitive price</p>
          </li>
        </ul>
        <Btn
          text="Order now"
          to="/shop"
          action={() => dispatch(filterSliceActions.setCategory("All"))}
        />
      </div>
    </div>
  );
}

export default About;
