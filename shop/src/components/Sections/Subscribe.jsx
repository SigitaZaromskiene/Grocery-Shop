import Btn from "../Buttons/Btn"

function Subscribe (){
    return (
        <div className='subscribe_container wrapper'>
            <form>
                <div className='subscribe_container_heading'>
                <h4>Join the newsletter</h4>
                <p>Subscribe to get our latest contect by email.</p>
                </div>
                <div className='subscribe_container_action'>
                    <input placeholder='email@email.com' type='email'></input>
                    <Btn text ='Subscribe'/>
                </div>
            </form>
        </div>
    )
}

export default Subscribe