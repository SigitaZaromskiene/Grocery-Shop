import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Btn from "../Buttons/Btn";
import { products } from "../Data/Groceries";
import Filter from "./Filter";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/slices/cartSlice";
import { sendCartData } from "../store/slices/cartSlice";
import { useState } from "react";

function Products() {
  const dispatch = useDispatch();

  const [productQuantities, setProductQuantities] = useState(0);

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
      <Filter />
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
                  const currentQuantity = productQuantities[p.id] || 0;
                  handleQuantityChange(p.id, currentQuantity + 1);
                }}
              >
                +
              </button>
              <input
                type="number"
                min="0"
                max="20"
                value={productQuantities[p.id] || 0}
                onChange={(e) =>
                  handleQuantityChange(p.id, parseInt(e.target.value))
                }
              ></input>
              <button
                className="category_container_latest_table_btns_btn"
                onClick={() => {
                  const currentQuantity = productQuantities[p.id] || 0;
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
              to="/shop"
              text="Add to cart"
              action={() => {
                setProductQuantities((prev) => prev === 0);
                dispatch(
                  sendCartData({
                    title: p.title,
                    price: p.price,
                    id: p.id,
                    quantity: parseInt(Object.values(productQuantities)),
                    totalPrice: p.totalPrice,
                  })
                );
                dispatch(
                  cartActions.addItemToCart({
                    title: p.title,
                    price: p.price,
                    id: p.id,
                    quantity: parseInt(Object.values(productQuantities)),
                  })
                );
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
