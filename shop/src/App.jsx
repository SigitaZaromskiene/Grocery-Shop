import './UI/App.scss' 
import Nav from './components/Sections/Nav';
import PageRoutes from './components/PageRoutes';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Notification from "./components/Sections/Notification"
import { useSelector} from 'react-redux/es/hooks/useSelector';
import { sendCartData } from './components/store/slices/cartSlice';



function App() {
  const showNotification = useSelector(state=>state.ui.notification)
  const cartData = useSelector(state=>state.cart)

  const dispatch = useDispatch()

  useEffect(()=>{
dispatch(
  sendCartData(cartData)
)
  })
  return (
    <div className="app_container">
       {showNotification && <Notification title='error' text='error mess' className='error'/>}
      <Nav/>
      <PageRoutes/>
  </div>
  );
}

export default App;
