import Btn from "../Buttons/Btn"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import TransparentBtn from "../Buttons/TransparentBtn";

function Category (){

    return (
        <section className='category_container'>
            <div className='category_container_heading'>
            <div className='category_container_border'></div>
            <h2>Shop by category</h2>
            <div className='category_container_border'></div>
            </div>
            <div className='category_container_buttons'>
            <FontAwesomeIcon icon={faArrowLeft} className='category_container_icon'/>
            <div className='category_container_tables'>
                <div className='category_container_table'>
                    <p>Vegetables</p>
                    <img></img>
                    <Btn to='/category' text="Shop now"/>
                </div>
                <div className='category_container_table'>
                    <p>Fruits</p>
                    <img></img>
                    <Btn to='/category' text="Shop now"/>
                </div>
                <div className='category_container_table'>
                    <p>Meat</p>
                    <img></img>
                    <Btn to='/category' text="Shop now"/>
                </div>
                <div className='category_container_table'>
                    <p>Juices</p>
                    <img></img>
                    <Btn to='/category' text="Shop now"/>
                </div>
                </div>
                <FontAwesomeIcon icon={faArrowRight} className='category_container_icon'/>
            </div>
            <TransparentBtn text='See all' to='/category'/>
            
        </section>
    )
}

export default Category