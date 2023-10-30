function Filter (){

    return (
        <div className="select_filter">
        <select>
          <option>Filter</option>
          <option>Fruits</option>
          <option>Vegetables</option>
          <option>Dairy</option>
          <option>Meat</option>
          <option>Drinks</option>
          <option>Bakery</option>
        </select>
        <select>
          <option>Sort By</option>
          <option>Lowest Price</option>
          <option>Highest Price</option>
          <option>Newest</option>
        </select>
      </div>
    )
}

export default Filter