import Btn from "../Buttons/Btn"
import TransparentBtn from "../Buttons/TransparentBtn"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar} from "@fortawesome/free-solid-svg-icons";

function LatestProducts () {

    return (
        <div className='category_container'>
        <div className='category_container_heading'>
        <div className='category_container_border'></div>
        <h2>Latest Products</h2>
        <div className='category_container_border'></div>
        </div>
        <div className='category_container_about_tables'>
            <div className='category_container_table'>
            <p>Apple</p>
                <div className='category_container_table_stars'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
                <img></img>
                <Btn to='/category' text="Shop now"/>
            </div>
            <div className='category_container_table'>
                <p>Orange Juice</p>
                <div className='category_container_table_stars'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
                <img></img>
                <Btn to='/category' text="Shop now"/>
            </div>
            <div className='category_container_table'>
                <p>Milk</p>
                <div className='category_container_table_stars'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
                <img></img>
                <Btn to='/category' text="Shop now"/>
            </div>
            <div className='category_container_table'>
                <p>Dark Bread</p>
                <div className='category_container_table_stars'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
                <img></img>
                <Btn to='/category' text="Shop now"/>
            </div>
            <div className='category_container_table'>
                <p>Chicken</p>
                <div className='category_container_table_stars'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
                <img></img>
                <Btn to='/category' text="Shop now"/>
            </div>
            <div className='category_container_table'>
                <p>Dark Bread</p>
                <div className='category_container_table_stars'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
                <img></img>
                <Btn to='/category' text="Shop now"/>
            </div>
            <div className='category_container_table'>
                <p>Chicken</p>
                <div className='category_container_table_stars'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
                <img></img>
                <Btn to='/category' text="Shop now"/>
            </div>
            <div className='category_container_table'>
                <p>Chicken</p>
                <div className='category_container_table_stars'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
                <img></img>
                <Btn to='/category' text="Shop now"/>
            </div>
            <div className='category_container_table'>
                <p>Chicken</p>
                <div className='category_container_table_stars'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
                <img></img>
                <Btn to='/category' text="Shop now"/>
            </div>
           
        </div>
        <TransparentBtn text='See all' to='/shop'/>
        
    </div>
    )
}

export default LatestProducts