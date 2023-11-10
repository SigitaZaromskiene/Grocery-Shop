import React, { useState } from 'react';
import Btn from "../Buttons/Btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import TransparentBtn from "../Buttons/TransparentBtn";
import { categories } from "../Data/Categories";
import { filterSliceActions } from "../store/slices/filterSlice";
import { useDispatch } from "react-redux";

function CategoryHome() {
  const dispatch = useDispatch();
  const itemsPerPage = 4;
  const [startIndex, setStartIndex] = useState(0);

  const handleArrowClick = (direction) => {
    if (direction === 'left') {
      setStartIndex(Math.max(0, startIndex - itemsPerPage));
    } else {
      setStartIndex(Math.min(categories.length - itemsPerPage, startIndex + itemsPerPage));
    }
  };

  const visibleCategories = categories.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className='category_container_home wrapper'>
      <div className='category_container_home_heading'>
        <div className='category_container_home_border'></div>
        <h2>Shop by category</h2>
        <div className='category_container_home_border'></div>
      </div>
      <div className='category_container_buttons'>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className='category_container_home_icon'
          onClick={() => handleArrowClick('left')}
        />
        <div className='category_container_home_tables'>
          {visibleCategories.map(c => (
            <div className='category_container_table' key={c.id}>
              <p>{c.title}</p>
            
              <img src={c.img} alt='Category img'></img>
             
              <Btn to='/shop' text="Shop now" action={() => dispatch(filterSliceActions.setCategory(c.title))} />
            </div>
          ))}
        </div>
        <FontAwesomeIcon
          icon={faArrowRight}
          className='category_container_icon'
          onClick={() => handleArrowClick('right')}
        />
      </div>
      <TransparentBtn text='See all' to='/category' />
    </section>
  );
}


    
   
    

    
    
    
    
    

export default CategoryHome