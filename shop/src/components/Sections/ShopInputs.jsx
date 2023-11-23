import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Btn from "../Buttons/Btn";
import { cartActions } from "../store/slices/cartSlice";
import { sendCartData } from "../store/slices/cartSlice";

import { useDispatch } from "react-redux";

function ShopInputs({ p }) {

  console.log(p)


  const [productQuantities, setProductQuantities] = useState(0);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <div className="btns_container">
        <button
          className="category_container_latest_table_btns_btn"
          onClick={() => setProductQuantities((c) => c + 1)}
        >
          +
        </button>
        <input
         className="btns_container_input"
          type="number"
          min="0"
          max="20"
          value={productQuantities}
          onChange={(e) => setProductQuantities(e.target.value)}
        ></input>

        <button
          className="category_container_latest_table_btns_btn"
          onClick={() => setProductQuantities((c) => (c <= 0 ? 0 : c - 1))}
        >
          -
        </button>
      </div>
      <div className="stars">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
      {productQuantities === 0 ? (
        <button className="btn disabled">Add to cart</button>
      ) : (
        <Btn
          
          text="Add to cart"
          action={() => {
            setProductQuantities(0);
            // dispatch(
            //   sendCartData({
            //     title: p.title,
            //     price: p.price,
            //     id: p.id,
            //     quantity: p.quantity + parseInt(productQuantities),
            //     totalPrice: p.totalPrice,
            //     category: p.category,
            //   })
            // );
            dispatch(
              cartActions.addItemToCart({
                title: p.title,
                price: p.price,
                id: p.id,
                quantity: p.quantity + parseInt(productQuantities),
                category: p.category,
                totalPrice: p.totalPrice
                
              })
            );
          }}
        />
      )}
    </div>
  );
}

export default ShopInputs;
