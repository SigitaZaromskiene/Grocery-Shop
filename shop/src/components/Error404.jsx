import {useNavigate} from "react-router-dom"
import { useEffect } from "react"

function Error404 () {

    const navigate = useNavigate()

    useEffect(()=>{
        setTimeout(()=>{
            navigate('/')
        }, 4000)
        
    }, [navigate])

return (
    <div>
        <p>404</p>
        <p>Sorry, page not found</p>
        
    </div>
)
    
}

export default Error404