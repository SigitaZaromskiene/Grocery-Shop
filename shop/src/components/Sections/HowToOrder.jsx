import Btn from "../Buttons/Btn";
import photo1 from "../../UI/Img/1.jpg";
import photo2 from "../../UI/Img/2.jpg";
import photo3 from "../../UI/Img/3.jpg";

function HowToOrder() {
  return (
    <div className="order_section_container wrapper">
      <div className="order_section_container_heading">
        <h3>Convinced already?</h3>
        <p className="order_section_container_secondary_heading">
          Here's how to shop in 3 simple steps
        </p>
      </div>
      <div className="order_section_container_steps_container">
        <div className="order_section_container_steps_container_step">
          <h5>Join for free</h5>
          <img src={photo1} loading="lazy" alt="Join for free" />
          <p>
            Join over 10000 users to access the easiest shopping experience.
          </p>
        </div>
        <div className="order_section_container_steps_container_step">
          <h5>Select items you want</h5>
          <img src={photo2} loading="lazy" alt="Order items" />
          <p>Choose from a various fresh and organic products.</p>
        </div>
        <div className="order_section_container_steps_container_step">
          <h5>Pick a preffered delivery day</h5>
          <img src={photo3} loading="lazy" alt="Pick a delivery date" />
          <p>Your groceries will arrive on a day convenient to you.</p>
        </div>
      </div>
      <Btn text="Start Shopping" to={"/shop"} />
    </div>
  );
}

export default HowToOrder;
