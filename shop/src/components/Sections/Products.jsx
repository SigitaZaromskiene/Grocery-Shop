import { products } from "../Data/Groceries";
import Filter from "./Filter";
import { useDispatch, useSelector } from "react-redux";

import ShopInputs from "./ShopInputs";

function Products() {
  const filter = useSelector((state) => state.filter);

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
        <div
          style={{
            display: "grid",
            gap: "40px",
            gridTemplateColumns: "1fr 1fr 1fr",
            justifyContent: "center",
          }}
        >
          {products.map((p) => (
            <div key={p.id} className="category_container_latest_table">
              <p className="category_container_latest_table_title">{p.title}</p>
              <div className="category_container_latest_table_price">
                {p.price} &euro;
              </div>
              <ShopInputs p={p} />
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

            <ShopInputs p={p} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
