import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Btn from "../Buttons/Btn";
import { products } from "../Data/Groceries";
import Filter from "./Filter";
import { useDispatch, useSelector} from "react-redux";
import { cartActions } from "../store/slices/cartSlice";
import { sendCartData } from "../store/slices/cartSlice";

function Products() {
  const dispatch = useDispatch();

   const cart = useSelector(state=>state.cart.cart)

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
          <div key={p.key} className="category_container_latest_table">
            <p className="category_container_latest_table_title">{p.title}</p>
            <div className="category_container_latest_table_price">
              {p.price} &euro;
            </div>
            <div className="category_container_latest_table_btns">
              <button className="category_container_latest_table_btns_btn">
                +
              </button>
              <input type="number"></input>
              <button className="category_container_latest_table_btns_btn">
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
              to="/cart"
              text="Add to cart"
              action={() => dispatch(sendCartData({title:p.title, price: p.price, id:p.id, quantity:p.quantity, totalQuantity:p.totalQuantity, totalPrice:p.price}))}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
