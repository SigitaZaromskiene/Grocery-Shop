import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Btn from "../Buttons/Btn";
import { products } from "../Data/Groceries";
import Filter from "./Filter";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/slices/cartSlice";
import { sendCartData } from "../store/slices/cartSlice";
import { useState } from "react";

function Products() {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.filter);

  const cart = useSelector(state=>state.cart.cart)

  const cartId = cart.filter(c=>c)

  console.log(cartId)

  const [productQuantities, setProductQuantities] = useState(0);

  


  const sortProducts = (products, sortBy) => {
    if (sortBy === "Lowest Price") {
      return products.slice().sort((a, b) => a.price - b.price);
    } else if (sortBy === "Highest Price") {
      return products.slice().sort((a, b) => b.price - a.price);
    } else if (sortBy === "Name") {
      return products.slice().sort((a, b) => b.name - a.name);
    } else {
      // No sorting, return products as is
      return products;
    }
  };

  // Filter products based on the category
  const filteredProducts = products.filter((product) => {
    if (product.category === "All" || product.category === filter.category) {
      return true;
    }
    return false;
  });

  // Sort the filtered products
  const sortedProducts = sortProducts(filteredProducts, filter.sortBy);

  

  if (filter.category === "All") {
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
                  onClick={() => setProductQuantities(c=>c+1)}
                  
                >
                  +
                </button>
                <input
                  type="number"
                  min="0"
                  max="20"
                  value={productQuantities}
                  onChange={(e)=>setProductQuantities(e.target.value)}
                  
                  
                ></input>
                <button
                  className="category_container_latest_table_btns_btn"
                 
                  onClick={() => setProductQuantities(c=>c-1)}
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
                
                  dispatch(
                    sendCartData({
                      title: p.title,
                      price: p.price,
                      id: p.id,
                      quantity:  parseInt(productQuantities ),
                      totalPrice: p.totalPrice,
                      category: p.category,
                    })
                  );
                  dispatch(
                    cartActions.addItemToCart({
                      title: p.title,
                      price: p.price,
                      id: p.id,
                      quantity: parseInt(productQuantities),
                      category: p.category,
                    })
                  );
                  setProductQuantities(0)
                }}
              />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="category_container_latest wrapper">
      <div className="category_container_latest_heading">
        <div className="category_container_latest_border"></div>
        <h2>Please choose your products</h2>
        <div className="category_container_latest_border"></div>
      </div>
      <Filter />
      <div className="category_container_about_tables">
        {sortedProducts.length === 0 && <p>No products in this category</p>}
        {sortedProducts.map((p) => (
          <div key={p.id} className="category_container_latest_table">
            <p className="category_container_latest_table_title">{p.title}</p>
            <div className="category_container_latest_table_price">
              {p.price} &euro;
            </div>
            <div className="category_container_latest_table_btns">
              <button
                className="category_container_latest_table_btns_btn"
               
                onClick={() => setProductQuantities(c=>c+1)}
              >
                +
              </button>
              <input
                type="number"
                min="0"
                max="20"
                value={productQuantities}
                onChange={(e)=>setProductQuantities(e.target.value)}
                
              ></input>
              <button
                className="category_container_latest_table_btns_btn"
                onClick={() => setProductQuantities(c=>c-1)}
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
              className={productQuantities===1? 'disabled': null}
              text="Add to cart"
              action={() => {
                setProductQuantities((prev) => ({ ...prev, [p.id]: 0 }));
                dispatch(
                  sendCartData({
                    title: p.title,
                    price: p.price,
                    id: p.id,
                    quantity: p.quantity +parseInt(productQuantities ),
                    totalPrice: p.totalPrice,
                    category: p.category,
                  })
                );
                dispatch(
                  cartActions.addItemToCart({
                    title: p.title,
                    price: p.price,
                    id: p.id,
                    quantity: p.quantity +parseInt(productQuantities ),
                    category: p.category,
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
