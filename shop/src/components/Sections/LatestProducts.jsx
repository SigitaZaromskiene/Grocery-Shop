import TransparentBtn from "../Buttons/TransparentBtn";
import { products, productsShortList } from "../Data/Groceries";
import ShopInputs from "./ShopInputs";

function LatestProducts() {
  return (
    <section className="category_container_latest wrapper">
      <div className="category_container_latest_heading">
        <div className="category_container_latest_border"></div>
        <h2>Please choose your products</h2>
        <div className="category_container_latest_border"></div>
      </div>
      <div className="category_container_about_tables">
        {productsShortList.map((p) => (
          <div key={p.id} className="category_container_latest_table">
            <p className="category_container_latest_table_title">{p.title}</p>
            <div className="category_container_latest_table_price">
              {p.price} &euro;
            </div>
            <ShopInputs p={p} />
          </div>
        ))}
      </div>
      <TransparentBtn text="Show all" to="shop" />
    </section>
  );
}

export default LatestProducts;
