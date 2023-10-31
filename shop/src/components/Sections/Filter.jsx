import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { filterSliceActions } from "../store/slices/filterSlice";

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const handleCategoryChange = (event) => {
    dispatch(filterSliceActions.setCategory(event.target.value)); // Dispatch the action to set the category
  };

  const handleSortByChange = (event) => {
    dispatch(filterSliceActions.setSortBy(event.target.value));
  };

  return (
    <div className="select_filter">
      <label>Filter</label>
      <select onChange={handleCategoryChange} value={filter.category}>
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Dairy">Dairy</option>
        <option value="Meat">Meat</option>
        <option value="Drinks">Drinks</option>
        <option value="Bakery">Bakery</option>
      </select>
      <label>Sort By</label>
      <select onChange={handleSortByChange} value={filter.category}>
        <option>Lowest Price</option>
        <option>Highest Price</option>
        <option>Name</option>
      </select>
    </div>
  );
}

export default Filter;
