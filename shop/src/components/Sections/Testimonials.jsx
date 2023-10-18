import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar} from "@fortawesome/free-solid-svg-icons";
import face6 from "../../UI/Img/face6.jpg"
import face7 from "../../UI/Img/face7.jpg"
import face3 from "../../UI/Img/face3.jpg"

function Testimonials (){

    return (
        <div className='testimonials'>
            <h2>What our beloved customers say about us</h2>
            <div className='testimonials_container'>
                <div className='testimonials_container_feedback'>
                    <div className='testimonials_container_feedback_info'>
                        <img src={face6} alt="Women"/>
                        <p>Liza Mandalez</p>
                    </div>
                    <p className='testimonials_container_feedback_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quo nobis earum consequatur commodi possimus. Veniam quod corporis cupiditate dolore eveniet, sed ex. Doloremque, porro dolores nam voluptatem consectetur esse.</p>
                    <div className='stars'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
                </div>
                <div className='testimonials_container_feedback'>
                    <div className='testimonials_container_feedback_info'>
                    <img src={face7} alt="Men"/>
                        <p>Farhan Rios</p>
                    </div>
                    <p className='testimonials_container_feedback_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quo nobis earum consequatur commodi possimus. Veniam quod corporis cupiditate dolore eveniet, sed ex. Doloremque, porro dolores nam voluptatem consectetur esse.</p>
                    <div className='stars'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
                </div>
                <div className='testimonials_container_feedback'>
                    <div className='testimonials_container_feedback_info'>
                    <img src={face3} alt="Women"/>
                        <p>Simona Krilinos</p>
                    </div>
                    <p className='testimonials_container_feedback_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quo nobis earum consequatur commodi possimus. Veniam quod corporis cupiditate dolore eveniet, sed ex. Doloremque, porro dolores nam voluptatem consectetur esse.</p>
                    <div className='stars'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
                </div>
            </div>
            <div className='dot_container'>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
            </div>
        </div>
    )
}

export default Testimonials