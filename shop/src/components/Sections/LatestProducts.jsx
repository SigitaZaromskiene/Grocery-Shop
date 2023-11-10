import Btn from "../Buttons/Btn";
import TransparentBtn from "../Buttons/TransparentBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { products } from "../Data/Groceries";
import { useState } from "react";
import { sendCartData } from "../store/slices/cartSlice";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/slices/cartSlice";

function LatestProducts() {
  const dispatch = useDispatch();


  const [productQuantities, setProductQuantities] = useState({});

  const handleQuantityChange = (productId, newQuantity) => {

    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
  };

  return (
    <section className="category_container_latest wrapper">
      <div className="category_container_latest_heading">
        <div className="category_container_latest_border"></div>
        <h2>Please choose your products</h2>
        <div className="category_container_latest_border"></div>
      </div>
      <div className="category_container_about_tables">
        {products.map((p) => (
          <div key={p.id} className="category_container_latest_table">
            <p className="category_container_latest_table_title">{p.title}</p>
            <div className="category_container_latest_table_price">
              {p.price} &euro;
            </div>
            <div className="category_container_latest_table_btns">
              <button
                className="category_container_latest_table_btns_btn"
                onClick={() => {
                  const currentQuantity = productQuantities[p.id] || 1;
                  handleQuantityChange(p.id, currentQuantity + 1);
                }}
              >
                +
              </button>
              <input
                type="number"
                min="0"
                max="20"
                value={productQuantities[p.id] || 1}
                onChange={(e) =>
                  handleQuantityChange(p.id, parseInt(e.target.value) || 1)
                }
              ></input>
              <button
                className="category_container_latest_table_btns_btn"
                onClick={() => {
                  const currentQuantity = productQuantities[p.id] || 1;
                  handleQuantityChange(p.id, currentQuantity - 1);
                }}
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
            <Btn
              text="Add to cart"
              action={() => {
                setProductQuantities((prev) => ({ ...prev, [p.id]: 1 }));
                dispatch(
                  sendCartData({
                    title: p.title,
                    price: p.price,
                    id: p.id,
                    quantity: parseInt(productQuantities[p.id]) || 1,
                    totalPrice: p.totalPrice,
                    category: p.category,
                  })
                );
                dispatch(
                  cartActions.addItemToCart({
                    title: p.title,
                    price: p.price,
                    id: p.id,
                    quantity: parseInt(productQuantities[p.id]) || 1,
                    category: p.category,
                  })
                );
              }}
            />
          </div>
        ))}
      </div>
      <TransparentBtn text="Show all" to="shop" />
    </section>
  );
}

export default LatestProducts;

