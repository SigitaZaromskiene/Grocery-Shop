import Btn from "../Buttons/Btn";
import { categories } from "../Data/Categories";
import { useDispatch } from "react-redux";
import { filterSliceActions } from "../store/slices/filterSlice";


function Category() {
  const dispatch = useDispatch();



  return (
    <section className="category_container wrapper">
      <div className="category_container_heading">
        <div className="category_container_border"></div>
        <h2>Shop by category</h2>
        <div className="category_container_border"></div>
      </div>
      <div className="category_container_tables">
        {categories.map((c) => (
          <div className="category_container_table">
            <p>{c.title}</p>
           
            <img src={c.img}  alt='Category img'></img>
           
            <Btn
              to="/shop"
              text="Shop now"
              action={() => dispatch(filterSliceActions.setCategory(c.title))}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Category;
