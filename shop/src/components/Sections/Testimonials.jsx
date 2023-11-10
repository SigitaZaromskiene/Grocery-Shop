import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import face6 from "../../UI/Img/face6.jpg";
import face7 from "../../UI/Img/face7.jpg";
import face3 from "../../UI/Img/face3.jpg";
import { useState } from "react";

function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <div className="testimonials wrapper">
      <h2>What our beloved customers say about us</h2>
      <div className="testimonials_container">
        <div className={`testimonials_container_feedback ${active === 0 ? "active_feedback" : ""}`}>
          <div className="testimonials_container_feedback_info">
            <img src={face6} alt="Women" />
            <p>Liza Mandalez</p>
          </div>
          <p className="testimonials_container_feedback_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            quo nobis earum consequatur commodi possimus. Veniam quod corporis
            cupiditate dolore eveniet, sed ex. Doloremque, porro dolores nam
            voluptatem consectetur esse.
          </p>
          <div className="stars">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
        <div className={`testimonials_container_feedback ${active === 1 ? "active_feedback" : ""}`}>
          <div className="testimonials_container_feedback_info ">
            <img src={face7} alt="Men" />
            <p>Farhan Rios</p>
          </div>
          <p className="testimonials_container_feedback_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            quo nobis earum consequatur commodi possimus. Veniam quod corporis
            cupiditate dolore eveniet, sed ex. Doloremque, porro dolores nam
            voluptatem consectetur esse.
          </p>
          <div className="stars">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
        <div className={`testimonials_container_feedback ${active === 2 ? "active_feedback" : ""}`}>
          <div className="testimonials_container_feedback_info">
            <img src={face3} alt="Women" />
            <p>Simona Krilinos</p>
          </div>
          <p className="testimonials_container_feedback_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            quo nobis earum consequatur commodi possimus. Veniam quod corporis
            cupiditate dolore eveniet, sed ex. Doloremque, porro dolores nam
            voluptatem consectetur esse.
          </p>
          <div className="stars">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
      </div>
      <div className="dot_container">
        <div
          className={`dot ${active === 0 ? "active_dot" : "dot"}`}
          onClick={() => setActive(0)}
        ></div>
        <div
          className={`dot ${active === 1 ? "active_dot" : "dot"}`}
          onClick={() => setActive(1)}
        ></div>
        <div
          className={`dot ${active === 2 ? "active_dot" : ""}`}
          onClick={() => setActive(2)}
        ></div>
      </div>
    </div>
  );
}

export default Testimonials;
