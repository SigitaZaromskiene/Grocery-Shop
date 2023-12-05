import Btn from "../Buttons/Btn";
import { useDispatch } from "react-redux";
import { sendNewsLetterSubsciberDetails } from "../store/slices/newsLetterSlice";
import { useState } from "react";

function Subscribe() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="subscribe_container wrapper">
      <form>
        <div className="subscribe_container_heading">
          <h4>Join the newsletter</h4>
          <p>Subscribe to get our latest contect by email.</p>
        </div>
        <div className="subscribe_container_action">
          <input
            placeholder="email@email.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <Btn
            text="Subscribe"
            action={() => {
              email !== "" && dispatch(sendNewsLetterSubsciberDetails(email));
              setEmail("");
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default Subscribe;
