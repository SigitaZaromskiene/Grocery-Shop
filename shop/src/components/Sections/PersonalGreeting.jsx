import { useSelector } from "react-redux";
import LongBtn from "../Buttons/LongBtn";



function PersonalGreeting (){
    const loggedPersonName = useSelector((state) => state.signIn.name);

    console.log(loggedPersonName)
    return (
        <div className='personal_greeting_container'>
            <p>Hello, {loggedPersonName}</p>
          
          </div>
      
    )
}

export default PersonalGreeting