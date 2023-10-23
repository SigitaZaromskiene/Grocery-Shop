import Btn from "../Buttons/Btn"
import TransparentBtn from "../Buttons/TransparentBtn"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar} from "@fortawesome/free-solid-svg-icons";

function LatestProducts () {

    return (
        <section className='category_container_latest wrapper'>
        <div className='category_container_latest_heading'>
        <div className='category_container_latest_border'></div>
        <h2>Latest Products</h2>
        <div className='category_container_latest_border'></div>
        </div>
        <div className='category_container_about_tables'>
            <div className='category_container_latest_table'>
            <p className='category_container_latest_table_title'>Apple</p>
            <div className='category_container_latest_table_price'>1.39 &euro;</div>
            <div className='category_container_latest_table_btns'>
            <button className='category_container_latest_table_btns_btn'>+</button>
            <input type="number"></input>
            <button className='category_container_latest_table_btns_btn'>-</button>
            </div>
                <div className='stars'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
                <img></img>
                <Btn to='/category' text="Shop now"/>
            </div>
            <div className='category_container_latest_table'>
                <p>Orange Juice</p>
                <div className='category_container_latest_table_price'>1.39 &euro;</div>
                <div className='category_container_latest_table_btns'>
            <button className='category_container_latest_table_btns_btn'>+</button>
            <input type="number"></input>
            <button className='category_container_latest_table_btns_btn'>-</button>
            </div>
                <div className='stars'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
                <img></img>
                <Btn to='/category' text="Shop now"/>
            </div>
            <div className='category_container_latest_table'>
                <p>Milk</p>
                <div className='category_container_latest_table_price'>1.39 &euro;</div>
                <div className='category_container_latest_table_btns'>
            <button className='category_container_latest_table_btns_btn'>+</button>
            <input type="number"></input>
            <button className='category_container_latest_table_btns_btn'>-</button>
            </div>
                <div className='stars'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
                <img></img>
                <Btn to='/category' text="Shop now"/>
            </div>
            <div className='category_container_latest_table'>
                <p>Dark Bread</p>
                <div className='category_container_latest_table_price'>1.39 &euro;</div>
                <div className='category_container_latest_table_btns'>
            <button className='category_container_latest_table_btns_btn'>+</button>
            <input type="number"></input>
            <button className='category_container_latest_table_btns_btn'>-</button>
            </div>
                <div className='stars'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
                <img></img>
                <Btn to='/category' text="Shop now"/>
            </div>
            <div className='category_container_latest_table'>
                <p>Chicken</p>
                <div className='category_container_latest_table_price'>1.39 &euro;</div>
                <div className='category_container_latest_table_btns'>
            <button className='category_container_latest_table_btns_btn'>+</button>
            <input type="number"></input>
            <button className='category_container_latest_table_btns_btn'>-</button>
            </div>
                <div className='stars'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
                <img></img>
                <Btn to='/category' text="Shop now"/>
            </div>
            <div className='category_container_latest_table'>
                <p>Dark Bread</p>
                <div className='category_container_latest_table_price'>1.39 &euro;</div>
                <div className='category_container_latest_table_btns'>
            <button className='category_container_latest_table_btns_btn'>+</button>
            <input type="number"></input>
            <button className='category_container_latest_table_btns_btn'>-</button>
            </div>
                <div className='stars'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
                <img></img>
                <Btn to='/category' text="Shop now"/>
            </div>
            <div className='category_container_latest_table'>
                <p>Chicken</p>
                <div className='category_container_latest_table_price'>1.39 &euro;</div>
                <div className='category_container_latest_table_btns'>
            <button className='category_container_latest_table_btns_btn'>+</button>
            <input type="number"></input>
            <button className='category_container_latest_table_btns_btn'>-</button>
            </div>
                <div className='stars'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
                <img></img>
                <Btn to='/category' text="Shop now"/>
            </div>
            <div className='category_container_latest_table'>
                <p>Chicken</p>
                <div className='category_container_latest_table_price'>1.39 &euro;</div>
                <div className='category_container_latest_table_btns'>
            <button className='category_container_latest_table_btns_btn'>+</button>
            <input type="number"></input>
            <button className='category_container_latest_table_btns_btn'>-</button>
            </div>
                <div className='stars'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
                <img></img>
                <Btn to='/category' text="Shop now"/>
            </div>
           
        </div>
        <TransparentBtn text='See all' to='/shop'/>
    </section>
    )
}

export default LatestProducts